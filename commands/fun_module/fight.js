const fights = require('../../JS/fights.json');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('You can\'t fight thin air dude, pick someone to fight.');
  if(message.mentions.users.first().id === "392855285263499274") return message.reply('He rose, rose HAAAAAA. ***It dealt ∞ damage. You got demolished.*** Twisted X 420 Won');
  if(message.mentions.users.first().id === "382319306899324928") return message.reply('You can\'t fight him you pleblord.:facepalm: He will destroy you:wink:');
      message.channel.send(`${message.author.username} is fighting ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fight',
  description: 'Fights a user.',
  usage: 'fight <user>',
  cooldown: 5,
};
