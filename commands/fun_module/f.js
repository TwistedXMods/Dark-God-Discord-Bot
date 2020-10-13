const Discord = require('discord.js');
const customisation = require('../../JS/customisation.json');

exports.run = async (client, message, args) => {
    message.delete();
    if(args && args.length > 1){
        message.channel.send(`Press F to pay respects **${args.join(' ')}** :regional_indicator_f:`)
    }else{
        message.channel.send(`Press F to pay respects`)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["eff"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'f',
    description: 'Press F to pay Respekt',
    usage: 'f',
    cooldown: 5,
  };