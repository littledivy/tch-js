const path = new URL(".", import.meta.url).pathname;
Deno.dlopen(path + "libtch.dylib", {

});
