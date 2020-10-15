module.exports = {
  name: "help",
  description: "list of all available commands",
  aliases: ["commands"],
  execute(message, args) {
    const data = [];
    const { commands } = message.client;

    if (!args.length) {
      data.push("Here are the available commands:");
      data.push(commands.map((command) => command.name).join("\n"));
      data.push(
        `\n You can send \`${process.env.PREFIX}help [command name]\` to get more info on a specific command`
      );

      return message.channel.send(data, { split: true });
    }

    const name = args[0].toLowerCase();
    const command =
      commands.get(name) ||
      commands.find((c) => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.channel.send("that's not a valid command");
    }

    data.push(`***name:*** ${command.name}`);

    if (command.aliases)
      data.push(`***aliases:*** ${command.aliases.join(", ")}`);
    if (command.description)
      data.push(`***description:*** ${command.description}`);

    message.channel.send(data, { split: true });
  },
};
