const Discord = require("discord.js");
const config = require("./botsettings.json");
const intents = new Discord.Intents(32767);
const Clent = new Discord.Client(({ intents }));

Client.login(botsettings.token);
