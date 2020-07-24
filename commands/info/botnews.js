const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
.setColor('#FC0000')
    .setTitle('Bot News')
    .addField(':rotating_light: All updates for Twisted X Modz', 'will be listed Here :rotating_light:')
    .addField('No News', 'Yet')
	.setTimestamp()
    .setFooter('© 2020 Twisted X Modz - All Rights Reserved');
    
    message.author.send(botembed);
}

module.exports.help = {
    name: "botnews",
    cooldown: 5,
}