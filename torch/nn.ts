import sys from "../torch_sys/mod.ts";
import { Tensor } from "./tensor.ts";

type Layer = (xs: Tensor) => Tensor;

export function Linear(in_features: number, out_features: number, options: { bias?: boolean, optim?: Optimizer } = { bias: true }): Layer {
  const ws = Tensor.zeroes([BigInt(in_features), BigInt(out_features)]).set_requires_grad();
  const bs = options?.bias ? Tensor.zeroes([BigInt(out_features)]).set_requires_grad() : null;

  if (options?.optim) {
    options.optim.add_param(ws, 0);
    if (bs) options.optim.add_param(bs, 0);
  }
  
  return (xs: Tensor): Tensor => {
    let tnsr = xs.matmul(ws);
    if(bs) tnsr = tnsr.add(bs);
    return tnsr;
  }
}

export function ReLU() {
  return (xs: Tensor): Tensor => xs.relu();
}

export function LogSoftmax(dim: number) {
  return (xs: Tensor): Tensor => xs.log_softmax(dim);
}

export class Sequential {
  layers: Layer[];
  constructor(...layers: Layer[]) {
    this.layers = layers;
  }

  forward(xs: Tensor) {
    return this.layers.reduce((xs, layer) => layer(xs), xs);
  }
}

class Optimizer {
  #c_optim: unknown;
  
  constructor(c_optim: unknown) {
    this.#c_optim = c_optim;
  }

  zero_grad() {
    sys.ato_zero_grad(this.#c_optim);
  }

  add_param(param: Tensor, group: number) {
    sys.ato_add_parameters(this.#c_optim, param.as_ptr(), group);
  }

  step() {
    sys.ato_step(this.#c_optim);
  }
}

function buildOptim<T>(build: T) {
  return {
    build,
  }
}

export const optim = {
  adam: ({ beta1, beta2, wd }: { beta1: number, beta2: number, wd: number } = { beta1: 0.9, beta2: 0.999, wd: 0.0 }) => buildOptim((lr: number) => new Optimizer(sys.ato_adam(lr, beta1, beta2, wd)))
}

export default {
    Linear,
    ReLU,
    LogSoftmax,
    Sequential,
    optim,
}