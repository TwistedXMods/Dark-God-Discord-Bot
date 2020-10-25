
const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
    .setDescription("Dark God Bot Information")
    .setColor(botconfig["bot_setup"].main_embed_color)
    .setThumbnail("")
    .addField("Bot Name", `${bot.user.username}`)
    .addField("Servers", bot.guilds.size)
    .addField("Credits", `This bot is made by Twisted X Modz#6666`)

    message.channel.send(botembed).then(msg => msg.delete(60000));
}

module.exports.help = {
    name: "botcredits",
    name2: "credits",
    name3: "Dark"
}