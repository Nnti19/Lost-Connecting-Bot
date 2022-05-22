const { MessageEmbed, Role } = require("discord.js");
const config = require("../utils/config.json");

module.exports = {
  name: "info",
  description: "ini merupakan command untuk mengetahui informasi bot dan user",
  execute(msg, args, client) {
    if (args[1]) {
      if (args[1] === "bot") {
        const embedBot = new MessageEmbed()
          .setTitle(client.user.username)
          .setColor(0x00ffff)
          .setDescription(
            `Sebuah bot yang digunakan untuk mengelola\nserver dan member di server Discord ${msg.guild.name}`
          )
          .setThumbnail(client.user.displayAvatarURL())
          .addField("Developer", "IfanID")
          .addField("version", config.version)
          .setFooter(
            `command used by : ${msg.author.username}`,
            msg.author.displayAvatarURL()
          );

        msg.channel.send({ embeds: [embedBot] });
      } else if (args[1] === "user") {
        let mention = msg.mentions.users.first() || msg.author;
        let member = msg.guild.members.cache.get(mention.id);
        let roles = "";
        let dateJoin = new Date(member.joinedTimestamp).toLocaleString();
        member._roles.forEach((id) => {
          roles += `${msg.guild.roles.cache.get(id)} `;
        });

        const embedUser = new MessageEmbed()
          .setTitle(`${member.user.username} Information`)
          .setColor(0x00ffff)
          .addField("User id", member.user.id, true)
          .addField(
            "Nickname",
            member.nickname ? member.nickname : "null",
            true
          )
          .addField("Roles", roles ? roles : "null")
          .addField("Join to server at", dateJoin)
          .setThumbnail(member.user.displayAvatarURL())
          .setFooter(
            `command used by : ${msg.author.username}`,
            msg.author.displayAvatarURL()
          );

        msg.channel.send({ embeds: [embedUser] });

        //msg.channel.send(`Username : ${msg.author.username}`);
      }
    } else {
      msg.channel.send("Masukan argumen yang kedua bot / user");
    }
  },
};
