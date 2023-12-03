const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("A basic ping command"),
  async execute(interaction) {
    const msg = await interaction.channel.send(`🏓 Pinging...`);

    const embed = new EmbedBuilder()
      .setTitle("Pong!")
      .setDescription(`Your server ping is ${Math.round(interaction.client.ws.ping)} MS.`)
      .setImage("https://media.giphy.com/media/4IAzyrhy9rkis/giphy.gif");
    await interaction.channel.send({ embeds: [embed] });
    msg.delete()
  },
};
