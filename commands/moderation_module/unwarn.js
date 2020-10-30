const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Invalid user.").then(msg => msg.delete(5000));

    warns[wUser.id].warns--;

    fs.writeFile("warnings.json", JSON.stringify(warns, null, 4), (err) => {
        if (err) console.log(err)
    });


    const warnEmbed = new Discord.MessageEmbed()
        .setDescription("User Warning(s) Removed")
        .setColor(botconfig["bot_setup"].main_embed_color)
        .addField("Removed By", `${message.author} - Hash: ${message.author.tag} - ID: ${message.author.id}`)
        .addField("User", `${wUser} - Hash: ${wUser.user.tag} - ID: ${wUser.id}`)
        .addField("Removed In", `${message.channel} - ID: ${message.channel.id}`)
        .addField("New Number of Warnings", warns[wUser.id].warns);

    let warnchannel = message.guild.channels.cache.find(channel => channel.id === botconfig["channel_setup"].warning_logs_channel);
    if(!warnchannel) return console.log("Channel not found (Config: 'warning_logs_channel')");

    warnchannel.send(warnEmbed);
    message.channel.send(`<@${wUser.id}> had 1 warning removed.`);
}

module.exports.help = {
    name: "unwarn"
}