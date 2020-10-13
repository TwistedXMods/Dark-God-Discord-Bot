const Discord = require('discord.js')
const botconfig = require("../../botconfig.json");
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars

  message.delete();
  if (message.author.id !== "392855285263499274") return message.reply('You do not have the permission to use this command!');
  try {
 let rebembed = new Discord.RichEmbed()
 .setColor(botconfig["bot_setup"].main_embed_color)
 .setTitle('Rebooting...')
 .setDescription(`Bot rebooting...`)

 await message.channel.send(rebembed)
  
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
    } catch(err) {
      const errorlogs = client.channels.get('392855285263499274')
      message.channel.send(`Whoops, We got a error right now! This error has been reported to Support center!`)
      errorlogs.send(`Error on reboot commands!\n\nError:\n\n ${err}`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owners"
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
  usage: "reboot"
};