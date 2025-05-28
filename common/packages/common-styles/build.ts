import { minify } from "csso";

const { spawnSync, file, write } = Bun;

const sassInput = "src/scss/main.scss";
const cssOutput = "dist/main.css";
const resetCSS = "node_modules/@unocss/reset/normalize.css";
const finalBundle = "dist/bundle.css";

// 1. Compilar Sass a CSS
const sass = spawnSync(["sass", `${sassInput}:${cssOutput}`], {
  stdout: "inherit",
  stderr: "inherit",
});

if (sass.success) {
  console.log("✅ Sass compilado correctamente.");

  // 2. Leer reset.css y styles.css
  const reset = await file(resetCSS).text();
  const styles = await file(cssOutput).text();

  // 3. Concatenar CSS
  const combined = `${reset}\n\n${styles}`;

  // 4. Minificar usando csso
  const minified = minify(combined).css;

  // 3. Concatenar y guardar como bundle
  await write(finalBundle, minified);

  console.log("✅ Bundle generado: dist/bundle.css");
} else {
  console.error("❌ Error al compilar Sass.");
}
