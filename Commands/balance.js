const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("shows the user's balance"),
  async execute(interaction, profileData) {
    const { balance } = profileData;
    const username = interaction.user.username
    await interaction.reply(`${username} has ${balance} cantina coins.`)
  },
};
