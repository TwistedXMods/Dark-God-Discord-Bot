const Discord = require("discord.js");
const botconfig = require("../../config.json");

module.exports.run = async (bot, message, args) => {

  message.delete();
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) message.channel.send("**❌ Nice try! You must be administrator + to use this command. ❌**")
    
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
  });
  
  message.channel.send(`**✅ The Channel was closed by ${message.author} ! To unlock it again, please run ?unlock. Only Administrators will be able to speak!**`)

}

module.exports.help = {
    name: "lock",
    cooldown: 5,
}