const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
   
    let bot1embed = new Discord.MessageEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
    //.addField('Prefix' , `${botconfig["bot_setup"].prefix}`)
    .addField('Help Menu - Meme commands' , `${botconfig["bot_commands"].Meme}`)
    message.author.send(bot1embed);
}
module.exports.help = {
    name: "help-meme",
    cooldown: 5,
}