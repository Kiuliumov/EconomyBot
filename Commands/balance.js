const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("A basic ping command"),
  async execute(interaction, profileData) {
    const { balance } = profileData;
    const username = interaction.user.username
    await interaction.reply(`${username} has ${balance} cantina coins.`)
  },
};
