//const { Command } = require('discord.js-commando');
//const { oneLine } = require('common-tags');
const { RichEmbed } = require('discord.js');
const botconfig = require("../../botconfig.json");

  module.exports.run = async ( message, args) => {
  //async run(message, args) {
    client.channels.cache.get("692783192574263364").send(RichEmbed);
    const annChan = bot.channels.cache.get('745065005166362714').send(RichEmbed);
    const annRole = message.guild.roles.get('338046233765478401');
    annRole.setMentionable(true);
    const embed = new RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(args.toAnn)
      .setColor(botconfig["bot_setup"].main_embed_color)
      .setTimestamp();
    annChan.send('@Notification squad', { embed }).then(() => {
      message.reply('Announcement sent!');
    });
    annRole.setMentionable(false);
  }
module.exports.help = {
  name: 'announce1111',
  aliases: ['update', 'lann', 'sendupdate'],
  group: 'control',
  memberName: 'announce',
  description: 'Sends an announcemnt to #announcements in SmoreSoftware',
  examples: ['announce'],
  args: [{
    key: 'toAnn',
    label: 'announce',
    prompt: 'What would you like to announce?',
    type: 'string',
    infinite: false
  }],
  guarded: true,
  ownerOnly: true
}
