const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    
    let botembed = new Discord.MessageEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)

.addField('My Twitch channel' , 'https://www.twitch.tv/twisted_x_420')
   
//.setTimestamp()
.setFooter(botconfig["bot_setup"].copyright);
    
    message.channel.send(botembed);
}

module.exports.help = {
    name: "twitch",
    cooldown: 5,
}