const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Invalid user.").then(msg => msg.delete(5000));
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't touch them.").then(msg => msg.delete(5000));
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    if (!reason) {
        reason = "N/A";
    }

    warns[wUser.id].warns++;

    fs.writeFile("warnings.json", JSON.stringify(warns, null, 4), (err) => {
        if (err) console.log(err)
    });

    let warnEmbed = new Discord.RichEmbed()
        .setDescription("User Warning")
        .setAuthor(message.author.username)
        .setColor(botconfig["bot_setup"].main_embed_color)
        .addField("Issued By", `${message.author} - Hash: ${message.author.tag} - ID: ${message.author.id}`)
        .addField("Warned User", `${wUser} - Hash: ${wUser.user.tag} - ID: ${wUser.id}`)
        .addField("Warned In", `${message.channel} - ID: ${message.channel.id}`)
        .addField("Reason", reason)
        .addField("Number of Warnings", warns[wUser.id].warns)
        .setFooter(botconfig["bot_setup"].copyright);
    let warnChannel = message.guild.channels.find(channel => channel.id === botconfig["channel_setup"].warning_logs_channel);
    if(!warnChannel) return console.log("Channel not found (Config: 'warning_logs_channel')");

    warnChannel.send(warnEmbed);

    if(warns[wUser.id].warns == 1){
        message.channel.send(`<@${wUser.id}> has been warned for: ${reason}`);
    }

    let muteRole = message.guild.roles.find(role => role.name === botconfig["moderation_module"].mute_role);
    if (!muteRole) return console.log("Role not found (Config: 'mute_role')");

    ///////////////////////////////////////
    if(warns[wUser.id].warns == 2){
        await(wUser.addRole(muteRole.id));
        message.channel.send(`<@${wUser.id}> has been warned for: ${reason}. <@${wUser.id}> muted for 2 mins`);

        setTimeout(function(){
            wUser.removeRole(muteRole.id)
            message.channel.send(`<@${wUser.id}> has been unmuted.`)
        }, ms('2m'))
    }

    ///////////////////////////////////////
    if(warns[wUser.id].warns == 3){
        await(wUser.addRole(muteRole.id));
        message.channel.send(`<@${wUser.id}> has been warned for: ${reason}. <@${wUser.id}> muted for 2 hours`);

        setTimeout(function(){
            wUser.removeRole(muteRole.id)
            message.channel.send(`<@${wUser.id}> has been unmuted.`)
        }, ms('2h'))
    }

    ///////////////////////////////////////
    if(warns[wUser.id].warns == 4){
        await(wUser.addRole(muteRole.id));
        message.channel.send(`<@${wUser.id}> has been warned for: ${reason}. <@${wUser.id}> muted for 4 hours`);

        setTimeout(function(){
            wUser.removeRole(muteRole.id)
            message.channel.send(`<@${wUser.id}> has been unmuted.`)
        }, ms('4h'))
    }

    ///////////////////////////////////////
    if(warns[wUser.id].warns >= 5){
        await(wUser.addRole(muteRole.id));
        message.channel.send(`<@${wUser.id}> has been warned for: ${reason}. <@${wUser.id}> muted for 1 day. To have your warnings reset use \`.new\``);

        setTimeout(function(){
            wUser.removeRole(muteRole.id)
            message.channel.send(`<@${wUser.id}> has been unmuted.`)
        }, ms("1d"))
    }

    if(botconfig["moderation_module"].DM_warned_user) {
        try{
            await user.send(`**Notification** \nThis is a notification to say that you have been warned in '${message.guild.name}' \Reason(s): ${reason}`);
        }catch(e){
            // console.log(e.stack);
            console.log('\x1b[33m%s\x1b[0m', "I tried to DM a new user, but their DM's are locked.");
        }
    }
}
module.exports.help = {
    name: "warn"
}