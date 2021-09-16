module.exports = {
  name: "ping",
  description: "this is a ping command",
  execute(message, args) {
    message.channel.send("pong!");
    // if (message.member.roles.cache.has(process.env.MOD)) {
    //   message.channel.send("pang!");
    // } else {
    //   message.channel.send("pong!");
    // }
  },
};
