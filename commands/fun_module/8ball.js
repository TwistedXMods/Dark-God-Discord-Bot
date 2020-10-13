// ©  MultiBot is created by Ianjkian (Ianjkian#3906). View the license!
const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if(message.channel.id == "362393374810177537") return message.channel.send("You cannot use that command here. Use <#577076125335814150>").then(msg => msg.delete(8000));

    message.channel.send(`<@${message.author.id}> ` + doMagic8BallVoodoo())

    function doMagic8BallVoodoo() {
        var rand = ['My GPU is saying yep', 'My CPU is saying no', 'Why are you even trying?', 'What do you think? NO', 'Baby baby maybe ohhh', 'Never for you', 'What the hell bro hell yeah', "Stop speaking", "Sure, why not", "My sources are saying no"];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }
}

module.exports.help = {
    name: "8ball"
}