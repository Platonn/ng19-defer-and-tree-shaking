import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const BASE_PATH = "projects/fine-grained-lib/src/lib";

const generateComponent = (num) => `import { Component } from '@angular/core';

@Component({
  selector: 'big-lib-c${num}',
  template: \` <p>c${num} works!</p> \`,
  styles: \`\`,
})
export class C${num}Component {}
`;

const generateNgPackage = () => `{
  "$schema": "../../../../../node_modules/ng-packagr/ng-package.schema.json",
  "lib": {
    "entryFile": "./public-api.ts"
  }
}
`;

const generatePublicApi = (num) => `export * from './c${num}.component';
`;

async function generateFiles() {
  for (let i = 1; i <= 100; i++) {
    const num = i.toString().padStart(3, "0");
    const dirPath = join(BASE_PATH, `c${num}`);

    try {
      await mkdir(dirPath, { recursive: true });

      await Promise.all([
        writeFile(
          join(dirPath, `c${num}.component.ts`),
          generateComponent(num)
        ),
        writeFile(join(dirPath, "ng-package.json"), generateNgPackage()),
        writeFile(join(dirPath, "public-api.ts"), generatePublicApi(num)),
      ]);

      console.log(`Generated files for c${num}`);
    } catch (err) {
      console.error(`Error generating c${num}:`, err);
    }
  }
}

generateFiles().catch(console.error);
