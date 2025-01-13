import { verifyAuth } from "middlewares/verifyAuth.middleware";
import { Hono } from "hono";
import { reLoginService } from "./relogin.service";

export const reloginModule = new Hono();

reloginModule.post(
  "",

  verifyAuth,

  // Controller
  async (context) => {
    const tokenPayload = context.get("tokenPayload");
    const newToken = reLoginService(tokenPayload);
    return context.json({ token: newToken });
  }
);
