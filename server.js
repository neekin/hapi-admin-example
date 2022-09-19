"use strict";

const { createServer } = require('hapi-admin')

const init = async () => {
  const server = await createServer()

  const tt = require('./routes/posts')
  console.log(tt)
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
