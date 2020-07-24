const Discord = require('discord.js');
const customisation = require('./../../jsonFiles/customisation.json');

exports.run = async (client, message, args) => {

  message.delete();
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL : message.author.avatarURL;
    
    const embed = new Discord.RichEmbed()
    .setColor("#FC0000")
    .setImage(`https://api.alexflipnote.dev/amiajoke?image=` + avatar) 
    .setFooter(`© 2020 Twisted X Modz - All Rights Reserved`);
    message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'amiajoke',
    description: 'Am I A Joke to You?',
    usage: 'amiajoke (w or w/o @mention)',
    cooldown: 5,
  };
   