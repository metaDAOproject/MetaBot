const { SlashCommandBuilder } = require("discord.js");
import { CommandInteraction, CacheType } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server."),

  async execute(interaction: any) {
    await interaction.reply({
      content: `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`,
      ephemeral: true,
    });
  },
};
