import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schemas.ts",
  out: "./src/db/migrations",
  dialect: "turso",
  dbCredentials: { url: "file:./src/db/template.db" },
});
