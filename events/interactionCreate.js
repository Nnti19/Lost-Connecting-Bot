const interactions = require("../config/interactionHandler");

module.exports = {
  name: "interactionCreate",
  execute(interaction) {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (!interactions.has(commandName)) return;
    interactions.get(commandName).execute(interaction);
  },
};
