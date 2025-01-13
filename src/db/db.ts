import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schemas from "./schemas.ts";
// import * as relations from "./relations";

const db = new Database();
export const orm = drizzle(db, {
  schema: { ...schemas },
});

// export const CONFIG_DB = {
//   url: !IS_PRODUCTION
//     ? "file:./src/db/template.db"
//     : Bun.env.TURSO_DATABASE_URL,
//   authToken: Bun.env.TURSO_AUTH_TOKEN,
// };

// const client = createClient(CONFIG_DB);
