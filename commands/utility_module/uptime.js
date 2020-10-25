const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    // let seconds = totalSeconds % 60; // Not added as there's not need for seconds.

    let uptimeEmbed = new Discord.RichEmbed()
    .setDescription(`${bot.user.username} Bot Uptime`)
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addField("Hours", hours)
    .addField("Minutes", minutes)
   // .setTimestamp()
    .setFooter(`${botconfig["bot_setup"].copyright}`)
    
    message.channel.send(uptimeEmbed).then(msg => msg.delete(10000));
}

module.exports.help = {
    name: "uptime"
}