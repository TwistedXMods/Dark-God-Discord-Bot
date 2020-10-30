const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    

    let sicon = message.guild.iconURL;
    let ipembed = new Discord.MessageEmbed()
    .setDescription("Twisted X Modz | Forum")
    .setColor(botconfig["bot_setup"].main_embed_color)
    .setThumbnail(sicon)
    .addField("URL", "https://twistedxmods.com/")
    .setFooter(botconfig["bot_setup"].copyright);
    message.channel.send(ipembed).then(msg => msg.delete(15000));
}

module.exports.help = {
    name: "forum"
}