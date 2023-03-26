import nn from "../torch/nn.ts";
import { load_mnist, read_image_file, read_labels } from "../torch/vision.ts";
import { Tensor } from "../torch/tensor.ts";
import { EventType, WindowBuilder } from "https://deno.land/x/sdl2/mod.ts";

const path = new URL("./data", import.meta.url).pathname;

const [train_images, train_labels] = await load_mnist(path, true);
const [test_images, test_labels] = await load_mnist(path, false);

const input_size = 784;
const hidden_size = 128;
const output_size = 10;

const optim = nn.optim.adam().build(0.001);
const model = new nn.Sequential(
  nn.Linear(input_size, hidden_size, { bias: true, optim }),
  nn.ReLU(),
  nn.Linear(hidden_size, output_size, { bias: true, optim }),
);

for (let i = 0; i < 100; i++) {
  const loss = model
    .forward(train_images)
    .log_softmax(-1)
    .nll_loss(train_labels);

  optim.zero_grad();
  loss.backward();
  optim.step();

  loss.print();
}

const test_accuracy = model
  .forward(test_images)
  .argmax(-1)
  .eq(test_labels)
  .to_float_type().mean();

test_accuracy.print();

const window = new WindowBuilder("MNIST tch-js", 800, 600).build();
const canvas = window.canvas();

const [data, samples, size] = await read_image_file(
  `${path}/t10k-images-idx3-ubyte`,
);
const labels = await read_labels(`${path}/t10k-labels-idx1-ubyte`);

let test_index = 0;

function next_test() {
  return [
    new Uint8Array(data).subarray(
      test_index * 28 * 28,
      (test_index + 1) * 28 * 28,
    ),
    labels[test_index],
  ];
}

function predict_step(data: Tensor, expected: number) {
  const test_accuracy = model
    .forward(data)
    .argmax(-1)
    .mean();

  test_accuracy.print();
  test_index++;
}

for (const event of window.events()) {
  if (event.type == EventType.Quit) {
    break;
  } else if (event.type == EventType.KeyDown) {
    const [s, expected] = next_test();
    canvas.setDrawColor(0, 0, 0, 255);
    canvas.clear();
    canvas.setDrawColor(255, 255, 255, 255);
    for (let i = 0; i < s.byteLength; i++) {
      let pixel = s[i];
      if (pixel > 0) {
        let x = i % 28;
        let y = Math.floor(i / 28);
        for (let j = 0; j < 4; j++) {
          for (let k = 0; k < 4; k++) {
            canvas.drawPoint(x * 4 + j, y * 4 + k);
          }
        }
      }
    }

    const f = new Float32Array(s.length);
    for (let i = 0; i < s.length; i++) {
      f[i] = s[i];
    }

    predict_step(Tensor.of(f), expected);

    canvas.present();
  }
}
