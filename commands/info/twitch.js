const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
.setColor('#FC0000')

.addField('My Twitch channel' , 'https://www.twitch.tv/twisted_x_420')
   
.setTimestamp()
.setFooter('© 2020 Twisted X Modz - All Rights Reserved');
    
    message.channel.send(botembed);
}

module.exports.help = {
    name: "twitch",
    cooldown: 5,
}