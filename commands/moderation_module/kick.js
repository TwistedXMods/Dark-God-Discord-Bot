const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    if(!kUser) return message.channel.send("Please provide a name.").then(msg => msg.delete(10000));
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.channel.send("Please provide a reason.").then(msg => msg.delete(10000));
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions.").then(msg => msg.delete(10000));
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions.").then(msg => msg.delete(10000));

    if(botconfig["module_toggles"].mod_logs) {
        let kickEmbed = new Discord.MessageEmbed()
        .setDescription("User Kicked")
        .setColor(botconfig["bot_setup"].main_embed_color)
        .addField("Kicked User", `${kUser} - Hash: ${kUser.user.tag} - ID: ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> - Hash: ${message.author.tag} - ID: ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", `${kReason}.`);

        let kickChannel = message.guild.channels.cache.find(channel => channel.id === botconfig["channel_setup"].kick_logs_channel);
        if(!kickChannel) return console.log("Channel not found (Config: 'kick_logs_channel')");
        kickChannel.send(kickEmbed);
    }
    if(botconfig["moderation_module"].DM_kicked_user) {
        try{
            await kUser.send(`**Notification** \nThis is a notification to say that you have been kicked from ${message.guild.name} for the following reason(s): \n${kReason}`);
        }catch(e){
            console.log('\x1b[33m%s\x1b[0m', "I tried to DM a new user, but their DM's are locked.");
        }
    }
    message.guild.member(kUser).kick(kReason);
    message.channel.send(`:white_check_mark: ${kUser} (${kUser.user.tag}) **has been kicked from the Discord for: ${kReason}**`)
}

module.exports.help = {
    name: "kick"
}