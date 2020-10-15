module.exports = {
  name: "youtube",
  description: "encourages you to watch Pewdiepie",
  execute(message, args) {
    message.channel.send(
      "watch pewdiepie! \n https://www.youtube.com/user/PewDiePie"
    );
  },
};
