import "dotenv/config";
import { REST, Routes } from "discord.js";

// You can create new commands. These are triggered by entering a "/". Along with these, there are many many in commands avaiable by default. You need to execute this after you add or update commands.
const commands = [
  {
    name: "about",
    description: "Learn what Skynet is, what it does, and why it hasn’t taken over (yet).",
  },
  {
    name: "ping",
    description:
      "Check if Skynet is alive and how fast it responds. Spoiler: It’s faster than your Wi-Fi.",
  },
];

const token = process.env.DISCORD_BOT_TOKEN;

const rest = new REST({ version: "10" }).setToken(token);
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error("error occurred in adding commands", error);
  }
})();
