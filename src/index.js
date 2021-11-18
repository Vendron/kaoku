const Discord = require("discord.js");
const config = require("../lib/config.json");
const client = new Discord.Client(({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] }));

client.once('ready', () => {
    console.log('Ready!');
});

client.on("messageCreate", (message) => {
    console.log(message.author.tag, message.author.bot, message.content)
    if (message.author.bot)
        return;
    if (message.content.toLowerCase().startsWith("!ping"))
        return message.channel.send({ content: "Pong!" });
  });
client.login(config.token);
