const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
.setColor('#FC0000')
    .setTitle('Twisted X Modz RP Info')
    .addField('Twisted X Modz RP Discord Server', 'https://discord.gg/FDJZJBe')
    .addField('Twisted X Modz RP Server IP', 'server1.twistedxmodz.com:30120')
    .addField('Twisted X Modz RP Status Command', '--status')
    .addField('Twisted X Modz RP Cad', 'https://mdt.twistedxmodz.com/')
    .addField('Twisted X Modz RP Cad Desktop App Download', 'https://mdt.twistedxmodz.com/App/Updater/Setup/Twisted%20X%20Modz%20RP%20CAD%20Setup.exe')
    .addField('Website', 'https://forum.twistedxmodz.com/')
	.setTimestamp()
    .setFooter('© 2020 Twisted X Modz - All Rights Reserved');
    
    message.channel.send(botembed);
}

module.exports.help = {
    name: "fivem",
    cooldown: 5,

}