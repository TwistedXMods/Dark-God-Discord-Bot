const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();

    let sicon = message.guild.iconURL;
    let ipembed = new Discord.RichEmbed()
    .setDescription("Twisted X Modz RP | Hot Keys")
    .setColor(botconfig["bot_setup"].main_embed_color)
    .setThumbnail(sicon)
    .addField("Radar system =", " ` ")
    .addField("Server Menu =", "M")
    .addField("Cyber Menu =", "F11")
    .addField("Cyber Tool =", "F7")
    .addField("mrp missions =", "F5")
    .addField("Drift Script { Keyboard } =", "Spacebar")
    .addField("Drift Script { Controller } =", "X")
    .addField("2Step Script { Keyboard } =", "NUMPAD 9")
    .addField("2Step Script { Controller } =", "RB")
    .setFooter(botconfig["bot_setup"].copyright);
    message.channel.send(ipembed)
}

module.exports.help = {
    name: "keys"
}