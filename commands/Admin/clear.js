const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    if(!args[0]) return message.channel.send("Use a number. Eg `clear 5`.").then(msg => msg.delete(5000));
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(10000));
    });
}

module.exports.help = {
    name: "clear",
    name2: "purge",
    name3: "prune",
    cooldown: 5,
}