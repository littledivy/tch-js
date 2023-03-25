#!/usr/bin/env -S LIBCLANG_PATH=/Library/Developer/CommandLineTools/usr/lib/libclang.dylib deno run -A --unstable

import {
  CXChildVisitResult,
  CXCursorKind,
  CXIndex,
  CXTypeKind,
} from "./libclang-deno/lib/mod.ts";

const headers = ["libtch/torch_api_generated.h"];

const ffiType = {
  [CXTypeKind.CXType_Pointer]: "pointer",
  [CXTypeKind.CXType_Int]: "i32",
  [CXTypeKind.CXType_Void]: "void",
  [CXTypeKind.CXType_Double]: "f64",
};

function generate(c) {
  const index = new CXIndex();
  const tu = index.parseTranslationUnit(c);
  const cursor = tu.getCursor();

  let s = `\n`;
  cursor.visitChildren((cursor) => {
    switch (cursor.kind) {
      case CXCursorKind.CXCursor_FunctionDecl:
        let name = cursor.getMangling();
        // Mangling mongling mingling mungling...
        if (name.startsWith("_")) {
          name = name.slice(1);
        }
        const repr = cursor.getDisplayName();
        const len = cursor.getNumberOfArguments();
        const args = [];
        for (let i = 0; i < len; i++) {
          const arg = cursor.getArgument(i);
          args.push({
            name: arg.getDisplayName(),
            type: arg.getType(),
          });
        }

        const result = cursor.getResultType();
        s += `    // ${repr}\n`;
        s += `    ${name}: { parameters: [${
          args.map((a) => `"${ffiType[a.type.kind]}"`).join(", ")
        }], result: "${ffiType[result.kind]}" },\n`;

        break;
      default:
        throw new Error(`Unhandled cursor kind: ${cursor.kind}`);
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });

  return `export function open(path: string) {\n  return Deno.dlopen(path, {${s}  });\n}\n`;
}

await Promise.all(
  headers.map(generate).map(async (s) => {
    await Deno.writeTextFile(`./torch_api_generated.h.ts`, s);
  }),
);
