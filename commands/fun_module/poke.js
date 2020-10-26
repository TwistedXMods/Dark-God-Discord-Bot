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
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them");
    if (message.mentions.users.first().id === "482128001828651008") return message.channel.send('<a:yayyy:497742636439044096>');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke");
    
    const embed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
    .setTitle(`OwO, ${message.author.username} poked ${message.mentions.users.first().username}`)
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
    name: 'poke',
    description: 'Pokes someone OwO',
    usage: 'poke',
    cooldown: 5,
  };
