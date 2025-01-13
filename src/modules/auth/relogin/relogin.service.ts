import type { JwtPayload } from "jsonwebtoken";
import { JWT } from "services/tokens/jwt";

export const reLoginService = (tokenPayload: JwtPayload) => {
  const { iat, exp, aud, iss, jti, nbf, sub, ...rest } = tokenPayload;

  const newToken = JWT.sign({ ...rest });

  return newToken;
};
