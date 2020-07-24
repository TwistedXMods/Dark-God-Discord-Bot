const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    message.delete()
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Invalid user");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));

    // if(!warns[wUser.id]){
    //   message.channel.send("This user has no warnings.").then(msg => msg.delete(10000));
    // }

    if(!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };
    
    let warnlevel = warns[wUser.id].warns;
  
    message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);
}

module.exports.help = {
    name: "warnings",
    cooldown: 5,
}