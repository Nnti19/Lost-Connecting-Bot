const permissions = require("../utils/permissions.json");
const { handlingPermission } = require("../config/permissionHandler");
module.exports = {
  name: "reminder",
  description: "ini merupakan command untuk reminder task",
  execute(msg, args, client) {
    handlingPermission(
      "reminder",
      msg,
      client,
      { channels: true },
      (status) => {
        if (status) {
          let set = msg.content.split(" | ");
          let time = 0;
          //* ++reminder | 1s | ada rapat client
          if (set[1]) {
            if (set[1].includes("s")) {
              time = 1000 * parseInt(set[1].replace("s", '""'));
            } else if (set[1].includes("m")) {
              time = 1000 * 60 * parseInt(set[1].replace("m", ""));
            } else if (set[1].includes("h", "")) {
              time = 1000 * 60 * 60 * parseInt(set[1].replace("h", ""));
            }
          } else {
            msg.reply("set time reminder");
          }

          if (set[2]) {
            setTimeout(() => {
              msg.delete();
              msg.channel.bulkDelete(1);
            }, 3000);

            msg.channel.send(`set reminder for you ${msg.author}`);
            setTimeout(() => {
              msg.channel.send(`${msg.author}, ${set[2]}`);
            }, time);
          } else {
            msg.reply("set message reminder");
          }
        }
      }
    );
  },
};
