const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();
const prefix = process.env.PREFIX;

client.once("ready", () => {
  console.log("the test is online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("pong!");
  } else if (command === "youtube") {
    message.channel.send(
      "watch pewdiepie! \n https://www.youtube.com/user/PewDiePie"
    );
  }
});

client.login();
