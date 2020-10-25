const Discord = require("discord.js")
const onfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
message.delete();
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let botmessage = args.join(" ");
        let sayEmbed = new Discord.RichEmbed()
        .setAuthor(`Important Announcement!`, message.author.avatarURL)
        .setColor(botconfig["bot_setup"].main_embed_color)
        .setDescription(`${botmessage}.`)
       // .setTimestamp()
        .setFooter(botconfig["bot_setup"].copyright);

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
    name: "announce",
    description: "Get the bot to say what ever you want in a specific channel.",
    usage: "<channel id> <msg>",
}