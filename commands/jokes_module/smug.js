const Discord = require('discord.js');
const superagent = require('superagent');
const botconfig = require("../../botconfig.json");
const customisation = require('./../../JS/customisation.json');
const cooldown = new Set();
exports.run = async (client, message, args, tools) => {

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


    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/smug");
    
    const embed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
    .setImage(body.url) 
    .setFooter(botconfig["bot_setup"].copyright);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'smug',
    description: 'Smugs xD',
    usage: 'smug',
    cooldown: 5,
  };