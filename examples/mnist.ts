import nn from "../torch/nn.ts";
import { load_mnist } from "../torch/vision.ts";

const path = new URL("./data", import.meta.url).pathname;

const [train_images, train_labels] = await load_mnist(path, true);
const [test_images, test_labels] = await load_mnist(path, false);

const input_size = 784
const hidden_sizes = [128, 64]
const output_size = 10

const optim = nn.optim.adam().build(1e-3);
const model = new nn.Sequential(
    nn.Linear(input_size, hidden_sizes[0], { bias: true, optim }),
    nn.ReLU(),
    nn.Linear(hidden_sizes[0], output_size, { bias: true, optim }),
);

for (let i = 0; i < 100; i++) {
    const loss = model.forward(train_images, optim).log_softmax(-1).nll_loss(train_labels);

    optim.zero_grad();
    loss.backward();
    optim.step();

    const test_accuracy = model.forward(test_images).argmax(1).eq(test_labels).to_float_type().mean();
    
    loss.print();
    test_accuracy.print();
}
