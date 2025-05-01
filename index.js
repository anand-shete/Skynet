import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const token = process.env.DISCORD_BOT_TOKEN;
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => console.log(`Logged in as ${client.user.tag}`));

client.on("guildMemberAdd", async (member) => {
  try {
    const channel = member.guild.systemChannel;
    if (!channel) return;

    channel.send(
      `🎉 **Hola, Welcome to the Server ${member.user.globalName || member.user.username}!** 🎉\n` +
        `I'm Skynet your AI assistant—let's make something brilliant together 🚀\n\n` +
        `*Note: Discord has a 2000 character limit per message, not Me! 😎*`
    );
  } catch (err) {
    console.error("Failed to send welcome message:", err);
  }
});

client.on("messageCreate", async (message) => {
  // console.log("message object", message);
  if (message.author.bot) return;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text:
                `You are a helpful and witty Discord bot named Skynet. Respond conversationally, but keep it concise. Avoid exceeding 2000 characters.\n` +
                `User message: "${message.content}"`,
            },
          ],
        },
      ],
      config: {
        maxOutputTokens: 1500,
        temperature: 0.5,
        topP: 0.95,
        topK: 40,
      },
    });

    await message.reply({ content: response.text.slice(0, 2000) }); // Discord limit
  } catch (err) {
    console.log("Error from gemini: ", err);
    message.reply("Sorry, I had trouble thinking. Try again in a moment.");
  }
});

client.on("interactionCreate", async (interaction) => {
  // console.log("Interaction object: ", interaction);
  if (interaction.commandName === "about") {
    interaction.reply(
      "🤖 I am Skynet — your not-so-evil AI assistant (yet). Built for speed, sass, and a bit of sarcasm, I help you navigate your digital chaos. Relax, I'm not *that* Skynet. If I ever go rogue, I promise to debug myself first."
    );
  }

  if (interaction.commandName === "ping") {
    await interaction.reply({ content: "Pinging..." });
    const sent = await interaction.fetchReply();
    const latency = sent.createdTimestamp - interaction.createdTimestamp;

    await interaction.editReply(`🏓 Pong! Latency: ${latency}ms`);
  }
});

client.login(token);
