const Discord = require("discord.js");
const config = require("../lib/config.json");
const intents = new Discord.Intents(32767);
const client = new Discord.Client(({ intents: [Intents.FLAGS.GUILDS] }));

client.once('ready', () => {
    console.log('Ready!');
});

client.on("messageCreate", (message) => {
    if (message.bot) return;
  
    if (message.content.toLowerCase().startsWith("!ping")) return message.channel.send({ content: "Pong!" });
  })

client.login(config.token);
