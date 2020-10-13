const cooldown = new Set();
exports.run = (client, msg) => {

  message.delete();
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

    msg.channel.send(`:game_die: **${msg.author.username}**, you rolled a **${Math.floor(Math.random() * 6) + 1}**!`);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Rolls a die.',
  usage: 'roll',
  cooldown: 5,
};
