const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();

    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
    //const channel = message.guild.channels.find('name', 'suggestions');
    const channel = message.guild.channels.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }
                                                    
    
    let botembed = new Discord.RichEmbed()
    .setAuthor(`Suggestions: `+ message.author.tag)
    //.setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    //.setThumbnail(message.author.avatarURL())
    .setColor("#FC0000")
    .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter('© 2020 Twisted X Modz - All Rights Reserved')
    
    message.channel.send(botembed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    
    message.channel.send("Sended Your Suggestion to " + channel)
    
  }

module.exports.help = {
    name: "suggest",
    usage: "suggest <message>",
    description: "Send your Suggestion",
    category: "main",
    cooldown: 5,
}