import type { MiddlewareHandler } from "hono";
import { Unauthorized } from "../errors/Unauthorized.err.ts";
import { JWT } from "../services/jwt/jwt.ts";
import type { JwtPayload } from "jsonwebtoken";

export const verifyAuth: MiddlewareHandler<T> = async (context, next) => {
  const Authorization = context.req.header("Authorization");
  if (!Authorization) throw new Unauthorized();

  const token = Authorization.split(" ").at(1);
  if (!token) throw new Unauthorized();

  const decoded = JWT.verify(token) as JwtPayload;

  context.set("tokenPayload", decoded);

  await next();
};

type T = {
  Variables: { tokenPayload: JwtPayload };
};