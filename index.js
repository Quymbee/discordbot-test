const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

client.once("ready", () => {
  console.log("the test is online!");
});

client.login();
