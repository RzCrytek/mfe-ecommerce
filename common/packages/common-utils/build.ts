const result = Bun.spawnSync(["tsc"]);

if (result.success) {
  console.log("✅ Compilado con éxito");
} else {
  console.error("❌ Error al compilar");
  process.exit(1);
}
