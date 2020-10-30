// ©  MultiBot is created by Ianjkian (Ianjkian#3906). View the license!
const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if(message.channel.id == "362393374810177537") return message.channel.send("You cannot use that command here. Use <#577076125335814150>").then(msg => msg.delete(8000));

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.MessageEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor(botconfig["bot_setup"].main_embed_color)
        message.channel.send(wEmbed).then(msg => msg.delete(10000));
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor(botconfig["bot_setup"].main_embed_color)
        message.channel.send(embed).then(msg => msg.delete(10000));
    }
}

module.exports.help = {
    name: "slots"
}