const Discord = require("discord.js");
const config = require("../library/botsettings.json");
const intents = new Discord.Intents(32767);
const client = new Discord.Client(({ intents }));

client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token);
