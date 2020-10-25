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
    .setTitle('About SoftArmy')
    .addField('1. SoftArmy', 'is gay')
    .addField('2. SoftArmy ', 'is a bitch')
    .addField('3. SoftArmy ', 'loves kids')
    .addField('4. SoftArmy ', 'is fat')
    .addField('4. SoftArmy ', 'is a noob')
    .setFooter(botconfig["bot_setup"].copyright);
    //.setFooter('© 2020 Twisted X Modz - All Rights Reserved');
    
    message.channel.send(botembed);
}

module.exports.help = {
    name: "soft",
    cooldown: 5,
}