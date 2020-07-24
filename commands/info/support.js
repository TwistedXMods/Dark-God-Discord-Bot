const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
.setColor('#FC0000')

.setAuthor(`Support Page`)

.addField('Discord Server' , 'https://discord.gg/7NJ9Zb')

.addField('Website' , 'https://www.twistedxmodz.tk/')
   
.addField('Github','https://github.com/TwistedExecutor')

.addField('Youtube channel','https://www.youtube.com/channel/UC1cISzeYvNfdYBLV0lJkhvQ')

.addField('Twitch channel','https://www.twitch.tv/twisted_x_420')

.addField('Donate','https://www.paypal.me/TwistedXModz?locale.x=en_US')

.setTimestamp()
.setFooter('© 2020 Twisted X Modz - All Rights Reserved');
    
message.author.send(botembed);

}

module.exports.help = {
    name: "support",
    cooldown: 5,
}