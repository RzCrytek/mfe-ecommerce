// const { spawn } = Bun;

// spawn(["bun", "run", "sass", "src/scss/main.scss:dist/main.css"], {
//   stdout: "inherit",
//   stderr: "inherit",
// });

// Bun does not have readFile/writeFile, use Bun.file and Bun.write instead

// Rutas
const sassInput = "src/scss/main.scss";
const cssOutput = "dist/main.css";
const resetCSS = "node_modules/@unocss/reset/normalize.css";
const finalBundle = "dist/bundle.css";

// 1. Compilar Sass a CSS
const sass = Bun.spawnSync(["sass", `${sassInput}:${cssOutput}`], {
  stdout: "inherit",
  stderr: "inherit",
});

if (sass.success) {
  console.log("✅ Sass compilado correctamente.");

  // 2. Leer reset.css y styles.css
  const reset = await Bun.file(resetCSS).text();
  const styles = await Bun.file(cssOutput).text();

  // 3. Concatenar y guardar como bundle
  await Bun.write(finalBundle, `${reset}\n\n${styles}`);
  console.log("✅ Bundle generado: dist/bundle.css");
} else {
  console.error("❌ Error al compilar Sass.");
}
