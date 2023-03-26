import sys from "../torch_sys/mod.ts";

function call<T>(f: () => T): T {
  const result = f();
  const c_char = sys.get_and_reset_last_err();
  if (c_char !== null) {
    throw new Error(Deno.UnsafePointerView.getCString(c_char));
  }
  return result;
}

let pTensor = new Uint8Array(8);
let bTensor = new BigUint64Array(pTensor.buffer);

export class Tensor {
  #c_tensor: unknown;

  constructor(c_tensor?: unknown) {
    this.#c_tensor = c_tensor;
  }

  as_ptr(): unknown {
    return this.#c_tensor;
  }

  static empty() {
    return new Tensor(call(() => sys.at_new_tensor()));
  }

  static of(data: Float32Array[]) {
    const len = new Uint32Array([data.length]);
    return new Tensor(call(() => sys.at_tensor_of_data(data, len, 1, 4, 6)));
  }

  view(size: number[]) {
    call(() => sys.atg_view(pTensor, this.#c_tensor, new BigInt64Array(size), size.length));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  dim(): number {
    return call(() => sys.at_dim(this.#c_tensor));
  }

  print() {
    call(() => sys.at_print(this.#c_tensor));
  }

  float(): number {
    return call(() => sys.ats_to_float(this.#c_tensor));
  }

  static zeroes(size: number[]) {
    call(() => sys.atg_zeros(pTensor, new BigInt64Array(size), size.length, 6, -1));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  matmul(other: Tensor) {
    call(() => sys.atg_matmul(pTensor, this.#c_tensor, other.#c_tensor));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0])); 
  }

  relu() {
    call(() => sys.atg_relu(pTensor, this.#c_tensor));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  log_softmax(dim: number) {
    call(() => sys.atg_log_softmax(pTensor, this.#c_tensor, dim, 6));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0])); 
  }
  
  nll_loss(targets: Tensor) {
    call(() => sys.atg_nll_loss(pTensor, this.#c_tensor, targets.#c_tensor, 0, 1, -100));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  backward() {
    call(() => sys.at_backward(this.#c_tensor, 0, 0));
  }

  string(): string {
    const ptr = sys.ats_to_string(this.#c_tensor);
    if (ptr === null) return "";
    return call(() => Deno.UnsafePointerView.getCString(ptr));
  }

  to_int_type() {
    call(() => sys.atg_totype(pTensor, this.#c_tensor, 4));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  to_float_type() {
    call(() => sys.atg_totype(pTensor, this.#c_tensor, 6));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  set_requires_grad() {
    call(() => sys.atg_set_requires_grad(pTensor, this.#c_tensor, 1));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  argmax(dim: number, keepdim: boolean = false) {
    let keepdim_int = keepdim ? 1 : 0;
    call(() => sys.atg_argmax(pTensor, this.#c_tensor, dim, 0, keepdim_int));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  eq(other: Tensor) {
    call(() => sys.atg_eq_tensor(pTensor, this.#c_tensor, other.#c_tensor));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  add(other: Tensor) {
    call(() => sys.atg_add(pTensor, this.#c_tensor, other.#c_tensor));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  mean() {
    call(() => sys.atg_mean(pTensor, this.#c_tensor, 6));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  static randn(size: number[]): Tensor {
    call(() =>
      sys.atg_randn(pTensor, new Int32Array(size), size.length, 6, -1)
    );
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }

  static rand(size: number[]): Tensor {
    call(() => sys.atg_rand(pTensor, new Int32Array(size), size.length, 6, -1));
    return new Tensor(Deno.UnsafePointer.create(bTensor[0]));
  }
}
