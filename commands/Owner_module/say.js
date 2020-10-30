const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let botmessage = args.join(" ");
        let sayEmbed = new Discord.MessageEmbed()
        .setAuthor(``, message.author.avatarURL)
        .setColor(botconfig["bot_setup"].main_embed_color)
        .setDescription(`${botmessage}.`)
       // .setTimestamp()

        try{
            message.channel.send(sayEmbed);
            return
        }catch(e){
            // console.log(e.stack);
            console.log('\x1b[33m%s\x1b[0m', "Say Embed Error Occurred. Crash Prevented.");
            return
        }
}

module.exports.help = {
    name: "say"
}