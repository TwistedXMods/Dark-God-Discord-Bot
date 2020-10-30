const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
    let ping = new Discord.MessageEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addField(':ping_pong: Pong! Latency is:' , `${new Date().getTime() - message.createdTimestamp}ms`)
    message.channel.send(ping);
}

module.exports.help = {
    name: "ping"
}