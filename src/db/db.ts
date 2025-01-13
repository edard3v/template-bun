import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schemas from "./schemas.ts";
// import * as relations from "./relations";

const db = new Database();
export const orm = drizzle(db, {
  schema: { ...schemas },
});
