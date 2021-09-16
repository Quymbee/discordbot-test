const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();

const client = new Discord.Client();
const prefix = process.env.PREFIX;
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("the test is online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "help") {
    client.commands.get("help").execute(message, args);
  } else if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "youtube") {
    client.commands.get("youtube").execute(message, args);
  } else if (command === "quotes") {
    client.commands.get("quotes").execute(message, args);
  }
});

client.login();
