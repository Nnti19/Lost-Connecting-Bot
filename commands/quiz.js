const permissions = require("../utils/permissions.json");
const { handlingPermission } = require("../config/permissionHandler");
module.exports = {
  name: "quiz",
  description: "ini merupakan command untuk mengetes koneksi bot",
  execute(msg, args, client) {
    handlingPermission(
      "quiz",
      msg,
      client,
      { roles: true, channels: true },
      (status) => {
        if (status) {
          if (args[1]) {
            if (args[1] === "question") {
              msg.channel.send("Apa itu Javascript");
            }
          } else {
            msg.channel.send("Add second args");
          }

          setTimeout(() => {
            msg.delete();
            msg.channel.bulkDelete(1);
          }, 10000);
        }
      }
    );
  },
};
