const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Thank You For The Report :smile:");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.MessageEmbed()
        .setDescription("Reports")
        .setColor(botconfig["bot_setup"].main_embed_color)
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", reason);

       let reportschannel = message.guild.channels.cache.find(`name`, "report-logs");
       if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
}

module.exports.help = {
    name: "report"
}