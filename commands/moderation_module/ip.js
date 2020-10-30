const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    

    let sicon = message.guild.iconURL;
    let ipembed = new Discord.MessageEmbed()
    .setDescription("ArisePVP")
    .setColor(botconfig["bot_setup"].main_embed_color)
    .setThumbnail(sicon)
    .addField("Server Name", "ArisePVP | Public Server")
    .addField("Server IP", "none")
    .addField("Join The Discord Server", "<https://discord.gg/MW5Xzmf> \n Click the above only once.")
  
    message.channel.send(ipembed).then(msg => msg.delete(15000));
}

module.exports.help = {
    name: "ip"
}