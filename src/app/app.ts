import { Hono } from "hono";
import { welcomeModule } from "modules/welcome/welcome.module";
import { notFoundHandler } from "./notFound.handler";
import { errHandler } from "./err.handler";
import { startRegisterModule } from "modules/auth/start-register/startRegister.module";
import { endRegisterModule } from "modules/auth/end-register/endRegister.module";

export const app = new Hono();

app.route("/", welcomeModule);
app.route("/start-register", startRegisterModule);
app.route("/end-register", endRegisterModule);

app.notFound(notFoundHandler);
app.onError(errHandler);
