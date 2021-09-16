const data = require("../data/quotes.json");

module.exports = {
  name: "quotes",
  description: "inspirational quotes",
  execute(message, args) {
    function pickRandom() {
      return data.quotes[Math.floor(Math.random() * data.quotes.length)];
    }

    const { quote, author, source } = pickRandom();

    message.channel.send(
      "**quote: **" +
        quote +
        "\n**author:** " +
        author +
        "\n**source:** " +
        source
    );
  },
};
