#!/usr/bin/env -S deno run --allow-run --allow-read --allow-env --allow-write --allow-net=deno.land

import { $ } from "https://deno.land/x/dax/mod.ts";

const out_dir = "./libtorch-extract/libtorch";
async function prepare_libtorch_dir() {
  const libtorch_env = Deno.env.get("LIBTORCH_DIR"); //  LIBTORCH_DIR=/opt/homebrew/Cellar/pytorch/1.13.0
  if (exists(libtorch_env)) {
    return libtorch_env;
  }

  // Linux
  // const device = Deno.env.get("LIBTORCH_DEVICE") || "cpu";

  if (exists(out_dir)) return out_dir;

  let libtorch_url;
  if (macos) {
    libtorch_url =
      `https://download.pytorch.org/libtorch/cpu/libtorch-macos-${TORCH_VERSION}.zip`;
  }

  if (!libtorch_url) throw new Error("not implemented");

  const zip = `v${TORCH_VERSION}.zip`;
  await $`curl -L ${libtorch_url} -o ${zip}`;
  await $`unzip ${zip} -d ${out_dir}`;
  return out_dir;
}

function exists(path) {
  try {
    Deno.statSync(path);
    return true;
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw e;
    }
  }
}

const macos = Deno.build.os === "darwin";
const unix = Deno.build.os === "linux" || macos;
const cuda_dep = "libtch/fake_cuda_dependency.cpp";
const TORCH_VERSION = "1.13.0";

function artifact(name) {
  const e = exists(name);
  if (e) {
    console.log("Artifact up to date:", name);
  }
  return e;
}

if (unix) {
  const dir = await prepare_libtorch_dir();
  const cxx11_abi = Deno.env.get("LIBTORCH_CXX11_ABI") || "1";
  if (!artifact("libtch.o")) {
    await $`clang -arch arm64 -std=c++14 -ffunction-sections -fdata-sections -fpic -O3 -I ${dir}/include 
    -I ${dir}/include/torch/csrc/api/include
    -Wl,-rpath,${dir}/lib
    -D_GLIBCXX_USE_CXX11_ABI=${cxx11_abi}
    -o libtch.o
    -c libtch/torch_api.cpp
    `.printCommand();
  }
  if (!artifact("libtch.dylib")) {
    await $`clang -shared -fpic -arch arm64
    -L${dir}/lib
    -Wl,-rpath,${dir}/lib
    -std=c++14
    -ltorch_cpu
    -ltorch
    -lc10
    -lc++
    -o libtch.dylib libtch.o`.printCommand();
  }

  if (!artifact("libtch.a")) {
    await $`clang -arch arm64 -std=c++14 -ffunction-sections -fdata-sections -fpic -O3 -I ${dir}/include
    -I ${dir}/include/torch/csrc/api/include
    -Wl,-rpath,${dir}/lib
    -D_GLIBCXX_USE_CXX11_ABI=${cxx11_abi}
    -o libtch.a
    -c libtch/torch_api.cpp
    `.printCommand();

  }
}
