const { SlashCommandBuilder } = require("discord.js");
import { CommandInteraction } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user."),

  async execute(interaction: any) {
    await interaction.reply({
      content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`,
      ephemeral: true,
    });
  },
};
