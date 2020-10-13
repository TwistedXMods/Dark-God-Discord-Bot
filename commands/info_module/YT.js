const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)

.addField('My YouTube channel' , 'https://www.youtube.com/channel/UC1cISzeYvNfdYBLV0lJkhvQ')
   
.setTimestamp()
.setFooter(botconfig["bot_setup"].copyright);
    
    message.channel.send(botembed);
}

module.exports.help = {
    name: "YT",
    cooldown: 5,
}