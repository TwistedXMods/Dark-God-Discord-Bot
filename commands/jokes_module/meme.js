const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const botconfig = require("../../botconfig.json");
const cooldown = new Set();
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  message.delete();
  try {

     /*
    Checks if author is inside the cooldown list
    */
   if (cooldown.has(message.author.id && message.guild.id)) {
    return message.reply(`This command have a cooldown of 5 **Seconds**`);
}
/*
  Command's cooldown due to spam issues
*/
cooldown.add(message.author.id && message.guild.id);
setTimeout(() => {
    cooldown.delete(message.author.id && message.guild.id);
}, 5000);

randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor(botconfig["bot_setup"].main_embed_color)
            .setFooter(botconfig["bot_setup"].copyright);
        message.channel.send(embed);
    });
    } catch(err) {
      const errorlogs = client.channels.get('752530212645896283')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on meme commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["meme", "memezzzzz"],
  permLevel: "Users"
};

exports.help = {
  name: "meme",
  category: "Fun",
  description: "Memezzzz 4 life",
  usage: "meme",
  cooldown: 5,
};