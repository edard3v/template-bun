import { Role } from "db/schemas";
import { z } from "zod";

export const roleSchema = z.nativeEnum(Role);
