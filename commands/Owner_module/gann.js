//const { Command } = require('discord.js-commando');
//const { oneLine, stripIndents } = require('common-tags');
const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");

  module.exports.run = async (bot, message, args) => {
  //async run(message, args) {
    if (message.author.id === '197891949913571329') {
      let toSay = `${args.msg}
Twisted X Modz Owner`;
      this.client.guilds.map(guild => {
        let found = 0;
        toSay = `${args.msg}
Twisted X Modz Owner
Want to turn these announcements off? Do \`${botconfig["bot_setup"].prefix}settings add announcements off\` to opt out.`;
        const setting = guild.settings.get('announcements');
        if (setting === 'off') return;
        guild.channels.map(c => {
          if (found === 0) {
            if (c.type === 'text') {
              if (c.permissionsFor(this.client.user).has('VIEW_CHANNEL') === true) {
                if (c.permissionsFor(this.client.user).has('SEND_MESSAGES') === true) {
                  c.send(toSay);
                  found = 1;
                }
              }
            }
          }
          return null;
        });
      });
      message.reply(`Execution completed. Shouted "${toSay}"`);
    } else if (message.author.id === '251383432331001856') {
      let toSay = `${args.msg}
~Chrono, SmoreSoftware Chief Executive Officer`;
      this.client.guilds.map(guild => {
        let found = 0;
        toSay = `${args.msg}
~Chrono, SmoreSoftware Chief Executive Officer
Want to turn these announcements off? Do \`${guild.commandPrefix}settings add announcements off\` to opt out.`;
        const setting = guild.settings.get('announcements');
        if (setting === 'off') return;
        guild.channels.map(c => {
          if (found === 0) {
            if (c.type === 'text') {
              if (c.permissionsFor(this.client.user).has('VIEW_CHANNEL') === true) {
                if (c.permissionsFor(this.client.user).has('SEND_MESSAGES') === true) {
                  c.send(toSay);
                  found = 1;
                }
              }
            }
          }
        });
      });
      message.reply(`Execution completed. Shouted "${toSay}"`);
    } else if (message.author.id === '250432205145243649') {
      let toSay = `${args.msg}
~Jdender, SmoreSoftware Chief Technology Officer`;
      this.client.guilds.map(guild => {
        let found = 0;
        toSay = `${args.msg}
~Jdender, SmoreSoftware Chief Technology Officer
Want to turn these announcements off? Do \`${guild.commandPrefix}settings add announcements off\` to opt out.`;
        const setting = guild.settings.get('announcements');
        if (setting === 'off') return;
        guild.channels.map(c => {
          if (found === 0) {
            if (c.type === 'text') {
              if (c.permissionsFor(this.client.user).has('VIEW_CHANNEL') === true) {
                if (c.permissionsFor(this.client.user).has('SEND_MESSAGES') === true) {
                  c.send(toSay);
                  found = 1;
                }
              }
            }
          }
        });
      });
      message.reply(`Execution completed. Shouted "${toSay}"`);
    } else {
      this.client.guilds.map(guild => {
        let found = 0;
        const toSay = `${args.msg}
~SmoreSoftware
Want to turn these announcements off? Do \`${guild.commandPrefix}settings add announcements off\` to opt out.`;
        const setting = guild.settings.get('announcements');
        if (setting === 'off') return;
        guild.channels.map(c => {
          if (found === 0) {
            if (c.type === 'text') {
              if (c.permissionsFor(this.client.user).has('VIEW_CHANNEL') === true) {
                if (c.permissionsFor(this.client.user).has('SEND_MESSAGES') === true) {
                  c.send(toSay);
                  found = 1;
                }
              }
            }
          }
        });
      });
      message.reply(`Execution completed. Shouted "${args.msg}"`);
    }
  }

module.exports.help = {
  name: 'gann',
  aliases: ['globalannounce', 'gsay', 'shout', 'gshout', 'tellall'],
  group: 'control',
  memberName: 'gann',
  description: 'Sends a global announcement.',
  examples: ['gann Hello'],

  args: [{
    key: 'msg',
    label: 'msg',
    prompt: 'What would you like to announce?',
    type: 'string',
    infinite: false
  }],
  ownerOnly: true,
  guarded: true
}