const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)

.setAuthor(`Support Page`)

.addField('Discord Server' , 'https://discord.gg/7NJ9Zb')

.addField('Website' , 'https://www.twistedxmods.com/')
   
.addField('Github','https://github.com/TwistedExecutor')

.addField('Youtube channel','https://www.youtube.com/channel/UC1cISzeYvNfdYBLV0lJkhvQ')

.addField('Twitch channel','https://www.twitch.tv/twisted_x_420')

.addField('Donate','https://www.paypal.me/TwistedXModz?locale.x=en_US')

.setTimestamp()
.setFooter(botconfig["bot_setup"].copyright);
    
message.author.send(botembed);

}

module.exports.help = {
    name: "support",
    cooldown: 5,
}