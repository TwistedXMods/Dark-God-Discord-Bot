const db = require('quick.db')
const discord = require('discord.js')
const { getInfo } = require("../../handler/xp.js")
module.exports.run = async (bot, message, args) => {
    message.delete();
    const user = message.mentions.users.first() || message.author;
    
    if(user.id === bot.user.id) { //IF BOT
      return message.channel.send("😉 | I am on level 100")
    }
    
    if(user.bot) {
      return message.channel.send("Bot do not have levels")
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    if(xp === 0) return message.channel.send(`**${user.tag}** is out of the xp`)
    
    let botembed = new discord.RichEmbed()
    .setAuthor(user.username, message.guild.iconURL())
    .setColor("#FC0000")
    .setThumbnail(user.avatarURL())
    .setDescription(`**LEVEL** - ${level}
**XP** - ${remxp}/${levelxp}`)
    
.setTimestamp()
.setFooter('© 2020 Twisted X Modz - All Rights Reserved');
message.channel.send(botembed);
    
  }

module.exports.help = {
    name: "level",
    description: "Get the level of author or mentioned",
    usage: "level <user>",
    category: "info",
    cooldown: 5,
}