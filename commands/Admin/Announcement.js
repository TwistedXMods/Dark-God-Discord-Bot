const Discord = require("discord.js")
const botconfig = require("../../config.json");

module.exports.run = async (bot, message, args) => {
message.delete();
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let botmessage = args.join(" ");
        let sayEmbed = new Discord.RichEmbed()
        .setAuthor(`Important Announcement!`, message.author.avatarURL)
        .setColor('#FC0000')
        .setDescription(`${botmessage}.`)
        .setTimestamp()

        try{
            message.channel.send(sayEmbed);
            return
        }catch(e){
            // console.log(e.stack);
            console.log('\x1b[33m%s\x1b[0m', "ann Embed Error Occurred. Crash Prevented.");
            return
        }
}

module.exports.help = {
    name: "ann",
    cooldown: 5,
}