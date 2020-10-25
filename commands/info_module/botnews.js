const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
const cooldown = new Set();
module.exports.run = async (bot, message, args) => {
    message.delete();
    /*
    Checks if author is inside the cooldown list
    */
      if (cooldown.has(message.author.id && message.guild.id)) {
          return message.reply(`This command have a cooldown of 5 **Seconds**`);
      }
      /*
        Command's cooldown due to spam issues
      */
      cooldown.add(message.author.id && message.guild.id);
      setTimeout(() => {
          cooldown.delete(message.author.id && message.guild.id);
      }, 5000);

    let botembed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
    .setTitle('Bot News')
    .addField(':rotating_light: All updates for Twisted X Modz', 'will be listed Here :rotating_light:')
    .addField('No News', 'Yet')
//	.setTimestamp()
    .setFooter(botconfig["bot_setup"].copyright);
    
    message.author.send(botembed);
}

module.exports.help = {
    name: "botnews",
    cooldown: 5,
}