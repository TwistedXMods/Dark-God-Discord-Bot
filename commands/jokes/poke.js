const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('./../../jsonFiles/customisation.json');


exports.run = async (client, message, args, tools) => {

  message.delete();
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them");
    if (message.mentions.users.first().id === "482128001828651008") return message.channel.send('<a:yayyy:497742636439044096>');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke");
    
    const embed = new Discord.RichEmbed()
    .setColor("#FC0000")
    .setTitle(`OwO, ${message.author.username} poked ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    .setFooter(`© 2020 Twisted X Modz - All Rights Reserved`);
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
