import { open } from "./torch_api_generated.h.ts";

const path = new URL(".", import.meta.url).pathname;

const { symbols } = open(path + "libtch.dylib", {
  // ats_int(v: i64) -> *mut C_scalar
  ats_int: {
    parameters: ["i64"],
    result: "pointer",
  },
  // ats_float(v: f64) -> *mut C_scalar
  ats_float: {
    parameters: ["f64"],
    result: "pointer",
  },
  // ats_to_int(s: *mut C_scalar) -> i64
  ats_to_int: {
    parameters: ["pointer"],
    result: "i64",
  },
  // ats_to_float(s: *mut C_scalar) -> f64
  ats_to_float: {
    parameters: ["pointer"],
    result: "f64",
  },
  // ats_to_string(s: *mut C_scalar) -> *mut c_char
  ats_to_string: {
    parameters: ["pointer"],
    result: "pointer",
  },
  // ats_free(s: *mut C_scalar)
  ats_free: {
    parameters: ["pointer"],
    result: "void",
  },

  // at_new_tensor() -> *mut C_tensor
  at_new_tensor: {
    parameters: [],
    result: "pointer",
  },
  // at_free(t: *mut C_tensor)
  at_free: {
    parameters: ["pointer"],
    result: "void",
  },
  // at_dim(t: *mut C_tensor) -> i64
  at_dim: {
    parameters: ["pointer"],
    result: "i64",
  },
  // at_print(t: *mut C_tensor)
  at_print: {
    parameters: ["pointer"],
    result: "void",
  },
  // at_grad_set_enabled(b: i32)
  at_grad_set_enabled: {
    parameters: ["i32"],
    result: "void",
  },
  // at_tensor_of_data(data: *mut f32, len: *mut u32, dim: i64, kind: i64, device: i64) -> *mut C_tensor
  at_tensor_of_data: {
    parameters: ["buffer", "buffer", "i64", "i64", "i64"],
    result: "pointer",
  },
  // at_backward(t: *mut C_tensor, keep_graph: i32, create_graph: i32)
  at_backward: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },

  // ato_adam(lr: f64, beta1: f64, beta2: f64, wd: f64) -> *mut C_optim
  ato_adam: {
    parameters: ["f64", "f64", "f64", "f64"],
    result: "pointer",
  },
  // ato_zero_grad(t: *mut C_optim)
  ato_zero_grad: {
    parameters: ["pointer"],
    result: "void",
  },
  // ato_step(t: *mut C_optim)
  ato_step: {
    parameters: ["pointer"],
    result: "void",
  },
  // ato_add_parameters(t: *mut C_optim, p: *mut C_tensor, group: i64)
  ato_add_parameters: {
    parameters: ["pointer", "pointer", "i64"],
    result: "void",
  },

  // get_and_reset_last_err() -> *mut c_char
  get_and_reset_last_err: {
    parameters: [],
    result: "pointer",
  },
});

// export symbols from the library
// so they can be imported like this:
// import { ats_int } from "torch_sys/mod.ts";

export default symbols;
