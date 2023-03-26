import { Tensor } from './tensor.ts';

async function check_magic_number(reader: Deno.Reader, expected: number) {
    const magic = await read_u32(reader);
    if (magic !== expected) {
        throw new Error("Invalid MNIST file");
    }
}

async function read_u32(reader: Deno.Reader): Promise<number> {
    const buf = new Uint8Array(4);
    const nread = await reader.read(buf);
    if (nread !== 4) {
        throw new Error("Invalid MNIST file");
    }
    return new DataView(buf.buffer).getUint32(0, false);
}

async function read_labels(path: string): Promise<Tensor> {
    const file = await Deno.open(path);
    await check_magic_number(file, 2049);
    const samples = await read_u32(file);
    const buf = new Uint8Array(samples);
    const nread = await file.read(buf);
    if (nread !== buf.length) {
        throw new Error("Invalid MNIST file");
    }    
    const data = new Float32Array(samples);
    for (let i = 0; i < data.length; i++) {
        data[i] = buf[i];
    }
    return Tensor.of(data).to_int_type();
}

async function read_image_file(path: string): Promise<Tensor> {
    const file = await Deno.open(path);
    await check_magic_number(file, 2051);
    const samples = await read_u32(file);
    const rows = await read_u32(file);
    const cols = await read_u32(file);

    const buf = new Uint8Array(samples * rows * cols);
    const nread = await file.read(buf);
    if (nread !== buf.length) {
        throw new Error("Invalid MNIST file");
    }

    const data = new Float32Array(samples * rows * cols);
    for (let i = 0; i < data.length; i++) {
        data[i] = buf[i] / 255;
    }

    return Tensor.of(data).view([BigInt(samples), BigInt(rows * cols)]);
}

export function load_mnist(
    base: string,
    { train }: { train: boolean } = { train: false },
): Promise<[Tensor, Tensor]> {
    const train_images = `${base}/train-images-idx3-ubyte`;
    const train_labels = `${base}/train-labels-idx1-ubyte`;
    const test_images = `${base}/t10k-images-idx3-ubyte`;
    const test_labels = `${base}/t10k-labels-idx1-ubyte`;

    const images = train ? train_images : test_images;
    const labels = train ? train_labels : test_labels;

    return Promise.all([
        read_image_file(images),
        read_labels(labels),
    ]);
}