import { Hono } from "hono";
import { welcomeModule } from "modules/welcome/welcome.module";
import { notFoundHandler } from "./notFound.handler";
import { errHandler } from "./err.handler";

export const app = new Hono();

app.route("/", welcomeModule);

app.notFound(notFoundHandler);
app.onError(errHandler);
