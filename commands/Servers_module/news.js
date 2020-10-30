const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    

    let sicon = message.guild.iconURL;
    let ipembed = new Discord.MessageEmbed()
    .setDescription("Twisted X Modz RP News")
    .setColor(botconfig["bot_setup"].main_embed_color)
    .setThumbnail(sicon)
    .addField("Update #1", "Twisted X Modz RP Server #1 will be offline for maintenance until sometime tomorrow evening but Server #2 will remain online")
   .addField("Update #2", "Twisted X Modz RP Server #2 will be offline for maintenance but Server #1 will remain online")
   .addField("Update #3", "We just got done with the maintenance on server 1 and 2 we have added some new map mods and same new game modes and we have added over 90+ new cars to both servers ")
   .addField("Update #4", "we have just added a cops and robbers game mode to Server 2 and server 2 is now just for Game Modes and Server 1 is just for RP and stuff like that")
   //.addField("", "")
   //.addField("", "")
   .setFooter(botconfig["bot_setup"].copyright);
    message.channel.send(ipembed)
}

module.exports.help = {
    name: "news"
}