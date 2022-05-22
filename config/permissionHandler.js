const permissions = require("../utils/permissions.json");

const handlingPermission = (command, msg, client, option, callback) => {
  let status = false;

  if (option.roles) {
    const roles = msg.guild.members.cache.get(msg.author.id)._roles;
    if (permissions[command].roles) {
      status = roles.some((role) => permissions.quiz.roles.includes(role));
      if (!status) {
        msg.channel.send(`You're not allowed to use this command`);
        return callback(status);
      }
    }
  }

  if (option.channels) {
    const channel = msg.channel.id;
    if (permissions[command].channels) {
      status = permissions[command].channels.includes(channel);
      if (!status) {
        let channelReady = "";
        permissions[command].channels.forEach((id) => {
          const ch = client.channels.cache.find((ch) => ch.id === id);
          if (ch !== undefined) {
            channelReady += `${ch}`;
          }
        });
        msg.channel.send(`The command can use at : ${channelReady}`);
        return callback(status);
      }
    }
  }
  return callback(status);
};

module.exports = { handlingPermission };
