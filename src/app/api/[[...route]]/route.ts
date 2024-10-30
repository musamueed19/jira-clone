import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import auth from '@/features/auth/server/route'

const app = new Hono().basePath("/api")

const routes = app
  .route("/auth", auth);

export const GET = handle(app);


export type AppType = typeof routes;


{/*
app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});

app.get("/project/:projectId", (c) => {
  const { projectId } = c.req.param();
  return c.json({ projectId: `Your Porject ID is: ${projectId}` });
});
*/}