#!/usr/bin/env -S deno run --allow-run --allow-read --allow-env --allow-net=deno.land

import { $ } from "./x.js";

await $`rm -rf ./libtch`;
await $`cp -R ./tch-rs/torch-sys/libtch ./libtch`;
