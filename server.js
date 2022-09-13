"use strict";

const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

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
      jwt:{
        testcase:false
      },
      swagger:{
        tags: [{ name: "tests", description: "测试相关" }]
      }
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
