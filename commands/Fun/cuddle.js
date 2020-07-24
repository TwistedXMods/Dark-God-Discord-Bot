const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('./../../jsonFiles/customisation.json');

exports.run = async (message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to cuddle them");
    //if (message.mentions.users.first().id == client.user.id && message.author.id !== "382319306899324928") return message.channel.send("Aww! *cuddles you* ")
   // if (message.mentions.users.first().id == client.user.id && message.author.id == "382319306899324928") return message.reply(">///< *cuddles dev-san*")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/cuddle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#FC0000")
    .setTitle(`${message.author.username} cuddled ${message.mentions.users.first().username} OwO`)
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
    name: 'cuddle',
    description: 'Cuddles someone OwO',
    usage: 'cuddle',
    cooldown: 5,
  };