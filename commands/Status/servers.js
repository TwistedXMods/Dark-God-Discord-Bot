const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
.setColor('#FC0000')
	.setTitle('Server Status')
    .setAuthor('Twisted X Modz', 'https://www.twistedxmodz.com/logo.png')
    .addField('Forum:', 'Online')
    .addField('Download Server:', 'Online')
    .addField('Shop:', 'Online')
    .addField('Auth Server:', 'Online')
    .addField('System Bot Server:', 'Online')
    .addField('Twisted X Modz Bot Server:', 'Online')
    .addField('FiveM Server:', 'Online')
	.setTimestamp()
    .setFooter('© 2020 Twisted X Modz - All Rights Reserved', 'https://www.twistedxmodz.com/logo.png');
    
    message.channel.send(botembed);
}

module.exports.help = {
    name: "servers",
    cooldown: 5,

}