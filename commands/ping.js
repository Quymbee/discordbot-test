module.exports = {
  name: "ping",
  description: "this is a ping command",
  execute(message, args) {
    if (message.member.roles.cache.has(process.env.MOD)) {
      message.channel.send("pong!");
    } else {
      message.channel.send("pang!");
    }
  },
};
