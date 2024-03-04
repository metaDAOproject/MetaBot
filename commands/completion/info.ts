const { SlashCommandBuilder } = require("discord.js");
import { CommandInteraction, ChannelType, Message } from "discord.js";
import OpenAI from "openai";
const wait = require("node:timers/promises").setTimeout;

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const fetch_completion = async (channel: any, question: string) => {
  let message_history: any[] = [];

  const chat_messages = await channel.messages.fetch();

  chat_messages.forEach((message: Message) => {
    message_history.unshift({
      role: "system",
      content: `user:${message.author.globalName}: message:${message.content}`,
    });
  });

  message_history.push({
    role: "user",
    content: question,
  });

  const chatCompletion: any = await openai.chat.completions.create({
    messages: message_history,
    model: "gpt-3.5-turbo",
  });

  return chatCompletion.choices[0].message.content;
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("gets info about a proposal")
    .addChannelOption((option: any) =>
      option
        .setName("proposal_channel")
        .setDescription(
          "The channel name of the proposal you want to get info about."
        )
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    )
    .addStringOption((option: any) =>
      option
        .setName("question")
        .setDescription("The question you want to ask about the proposal.")
        .setMaxLength(2_000)
        .setRequired(true)
    ),

  async execute(interaction: any) {
    const proposal_channel = interaction.options.getChannel("proposal_channel");
    const question = interaction.options.getString("question");
    const proposal_category = process.env.DISCORD_PROPOSAL_CATEGORY_ID;

    if (proposal_channel.parentId !== proposal_category) {
      return await interaction.reply({
        content: "The selected channel is not a valid proposal channel.",
        ephemeral: true,
      });
    }

    await interaction.deferReply({
      ephemeral: true,
    });

    const completion = await fetch_completion(proposal_channel, question);

    await interaction.editReply({ content: completion });
  },
};
