var Discord = require("discord.js");
var Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot opérationel");
});

Client.login(process.env.TOKEN);








