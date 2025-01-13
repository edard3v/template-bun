import z from "zod";
import { emailSchema } from "zod-schemas/email.schema";
import { passwordSchema } from "zod-schemas/password.schema";

export const startRegisterDTO = z
  .object({
    email: emailSchema,
    password: passwordSchema,
  })
  .strict();

export type StartRegisterDTO = z.infer<typeof startRegisterDTO>;
