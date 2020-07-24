const Discord = require("discord.js");
const botconfig = require("../../config.json");

module.exports.run = async (bot, message, args) => {

  message.delete();
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) message.channel.send("**❌ Nice try! You must be administrator + to use this command. ❌**")
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
  });
  let enligne = new Discord.RichEmbed()
  .addField(`🔓 Channel Unlocked`,`**The Channel has been unlocked by ${message.author}**`)
  
  message.channel.send(enligne)
}

module.exports.help = {
    name: "unlock",
    cooldown: 5,
}