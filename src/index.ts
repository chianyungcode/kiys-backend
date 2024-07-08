import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  port: process.env.APP_PORT || "3000",
  fetch: app.fetch,
};