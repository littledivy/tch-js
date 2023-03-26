import { open } from "./torch_api_generated.h.ts";

const path = new URL(".", import.meta.url).pathname;

Deno.test("open", () => {
    const lib = open(path + "libtch.dylib");
    lib.close();
});