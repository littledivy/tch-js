## tch-js

High performance JavaScript bindings for PyTorch. Runs on Deno.

_Help wanted! Feel free to add new API bindings and examples._

### Platform support matrix

| Platform     | Supported | Notes                                        |
| ------------ | --------- | -------------------------------------------- |
| macOS        | ✅        | CPU only. libtorch from `brew` (MPS planned) |
| macOS x86_64 | ❌        | TODO                                         |
| Windows      | ❌        | TODO                                         |
| Linux        | ❌        | TODO                                         |

### Building

You need libtorch, clang and Deno to build torch_sys.

Install libtorch via `brew`:
```
brew install torch
LIBTORCH_DIR=/opt/homebrew/Cellar/pytorch/1.13.0/
```

Make sure you've the submodules in `torch_sys` (clone using `--recurse-submodules`) and run `torch_sys/build.js`.

A lot of the bindings are auto-generated using libclang-deno. Note: The bindings have incorrect signatures, symbols need to be manually corrected when binding to a high-level API. To generate `torch_api_generated.h.ts`, run `torch_sys/ffigen.js`.

