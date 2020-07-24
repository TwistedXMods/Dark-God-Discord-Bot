const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('./../../jsonFiles/customisation.json');

exports.run = async (client, message, args, tools) => {

  message.delete();
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/smug");
    
    const embed = new Discord.RichEmbed()
    .setColor("#FC0000")
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
    name: 'smug',
    description: 'Smugs xD',
    usage: 'smug',
    cooldown: 5,
  };