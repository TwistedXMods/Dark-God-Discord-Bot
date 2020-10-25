const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

exports.run = (client, message, args) =>{

    message.delete();
    var dice = [1, 2, 3, 4, 5, 6];

    const embed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
        .addField("First dice", dice[Math.floor(Math.random()*dice.length)], true)
        .addField("Second dice", dice[Math.floor(Math.random()*dice.length)], true)
        .setFooter(botconfig["bot_setup"].copyright)
       // .setTimestamp();

    return message.channel.send(embed);    
}
module.exports.help = {
    name: "rolldice",
    cooldown: 5,
}