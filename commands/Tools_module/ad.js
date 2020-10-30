const { MessageEmbed } = require("discord.js");
const botconfig = require("../../botconfig.json");

  module.exports.run = async (bot, message, args) => {

    
    let Str = message.content.slice(bot.prefix.length + 2 + 1);
    if (!args[0])
      return message.channel.send(`You did not specify your advert!`);
    bot.channels.cache
     // .get("668559422687281203")
      .send(
        new MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setTitle(`New advertisement from ${message.author.tag}!`)
          .setDescription(Str)
          .setColor(botconfig["bot_setup"].main_embed_color)
          )
      },
module.exports.help = {
  name: "ad",
  description: "Advertise your server",
  category: "fun",
    cooldown: 5,
  }
//!ad then your messa.ge....
//668559422687281203
