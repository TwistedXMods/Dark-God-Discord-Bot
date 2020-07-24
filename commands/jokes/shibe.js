const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('./../../jsonFiles/customisation.json');

exports.run = async (client, message, args) => {

  message.delete();
   const { body } = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)

  const embed = new Discord.RichEmbed()
    .setColor("#FC0000")
    .setTitle("Here's Your Shibe")
    .setImage(body[0]) 
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
    name: 'shibe',
    description: 'Sends a random shibe',
    usage: 'shibe',
    cooldown: 5,
  };