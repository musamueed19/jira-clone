import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { loginSchema } from "../schemas";


const app = new Hono()
  .post("/login", zValidator("json", loginSchema), (c) => {
  return c.json({ message: "ok" });
});

export default app;
