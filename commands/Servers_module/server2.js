const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();

    let sicon = message.guild.iconURL;
    let ipembed = new Discord.RichEmbed()
    .setDescription("Twisted X Modz RP")
    .setColor(botconfig["bot_setup"].main_embed_color)
    .setThumbnail(sicon)
    .addField("Server Name", "Twisted X Modz RP Game Mode Server #2")
    .addField("Server IP", "server2.twistedxmodz.xyz:30120")
    .addField("Join The Discord Server", "<https://discord.gg/G8PsfGB> \n Click the above only once.")
    .setFooter(botconfig["bot_setup"].copyright);
    message.channel.send(ipembed)
}

module.exports.help = {
    name: "server2"
}