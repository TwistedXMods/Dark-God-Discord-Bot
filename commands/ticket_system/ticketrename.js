// © 2019 Fraffel Media. MultiBot is created by FAXES (FAXES#8655). View the license!
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) return message.channel.send("Please specify a channel name. Use a \`-\` at the start to add to the existing name.");
    let channelRename = args.join('-')

    if (message.channel.name.startsWith(`ticket-`)) {
        if(channelRename.startsWith(`-`)) {
            message.channel.setName(`${message.channel.name}${channelRename}`)
            message.channel.send(`<@${message.author.id}> Renamed the channel to: *${message.channel.name}${channelRename}*`)
        } else {
            message.channel.setName(`ticket-${channelRename}`)
            message.channel.send(`<@${message.author.id}> Renamed the channel to: *ticket-${channelRename}*`)
        }
    } else {
        return message.channel.send(`Your not in a ticket channel.`).then(msg => msg.delete(5000));
    }
}

module.exports.help = {
    name: "rename",
    cooldown: 5,
}