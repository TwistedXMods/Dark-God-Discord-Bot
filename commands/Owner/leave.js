exports.run = (client, message, args) => {

  message.delete();
    if(message.author.id !== "392855285263499274") return message.channel.send(`**»** ${message.author}, you don't have permission to do that❌`);
    let id = args[0];
    if (!id) id = message.guild.id;
    return message.guild.leave(id);
    }
  
exports.help = {
  name: 'leave',
  description: 'Leave the server that the bot is in.',
  usage: 'leave',
  ownerOnly: true,
};
  