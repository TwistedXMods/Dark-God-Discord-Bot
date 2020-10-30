const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) message.channel.send("**❌ Nice try! You must be administrator + to use this command. ❌**")
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
  });
  let enligne = new Discord.MessageEmbed()
  .addField(`🔓 Channel Unlocked`,`**The Channel has been unlocked by ${message.author}**`)
  
  message.channel.send(enligne)
}

module.exports.help = {
    name: "chatunlock"
}