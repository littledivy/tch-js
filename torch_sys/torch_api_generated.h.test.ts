import { open } from "./torch_api_generated.h.ts";

const path = new URL(".", import.meta.url).pathname;

Deno.test("open", () => {
    const { symbols, close } = open(path + "libtch.dylib");
    console.log(symbols.torch_version());
    close();
});