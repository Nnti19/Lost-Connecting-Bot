const { Collection } = require("discord.js");
const fs = require("fs");

const interactions = new Collection();

const files = fs
  .readdirSync("./commands/interactions/")
  .filter((file) => file.endsWith(".js"));

for (const file of files) {
  const interaction = require(`../commands/interactions/${file}`);
  interactions.set(interaction.name, interaction);
}

module.exports = interactions;
