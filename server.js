"use strict";

const createServer = require('hapi-admin/createServer')

const init = async () => {
  const server = createServer()

  await server.register({
    plugin: require("hapi-admin"),
    options: {
      admin: {
        locale: {
          translations: {
            labels: {
              loginWelcome: "我很开心呀",
            },
          },
        },
      },
    },
  });
  // await server.register({
  //   plugin: require('hapi-pino'),
  //   options: {
  //       prettyPrint: false,
  //       logEvents: ['response', 'onPostStart']
  //   }
  // })
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
