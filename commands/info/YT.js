const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
.setColor('#FC0000')

.addField('My YouTube channel' , 'https://www.youtube.com/channel/UC1cISzeYvNfdYBLV0lJkhvQ')
   
.setTimestamp()
.setFooter('© 2020 Twisted X Modz - All Rights Reserved');
    
    message.channel.send(botembed);
}

module.exports.help = {
    name: "YT",
    cooldown: 5,
}