module.exports = {
  name: "ping",
  description: "ini merupakan command untuk mengetes koneksi bot",
  execute(msg, args, client) {
    msg.reply("pong");
    setTimeout(() => {
      msg.delete();
      msg.channel.bulkDelete(1);
    }, 3000);
  },
};
