const server = Bun.serve({
  port: 8080,
  static: {
    "/api/time": new Response(new Date().toISOString(), {
      headers: {
        "X-Custom-Header": "Bun!",
      },
    }),
  },

  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
});
