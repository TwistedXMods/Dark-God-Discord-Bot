const cooldown = new Set();
exports.run = (client, message, args) => {

  

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


    let user = message.mentions.users.first();
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('You can\'t smack thin air, pick someone fool.');
    if(message.mentions.users.first().id === "242263403001937920") return message.reply('You can\'t hurt him you pleblord.:facepalm:');
    message.channel.send(`${message.author.username} smacked ${message.mentions.users.first().username}.`)
    }
    
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'smack',
    description: 'Smacks a user.',
    usage: 'smack <user>',
    cooldown: 5,
  };
  