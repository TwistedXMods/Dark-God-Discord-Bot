const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
    let botMessage = args.join(" ");

    if(botMessage.length < 1) return message.channel.send("Please specify a message").then(msg => msg.delete(5000));
    message.channel.send(botMessage);
}

module.exports.help = {
    name: "say",
    cooldown: 5,
}