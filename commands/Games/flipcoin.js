var flipcoin = ["heads", "tails"];

exports.run = (client, message, args) =>{

    message.delete();
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

    var randomIndex = Math.floor(Math.random() * flipcoin.length); 

    message.channel.send(`<@${member.user.id}> `+ flipcoin[randomIndex]);
}
module.exports.help = {
    name: "flipcoin",
    cooldown: 5,
}