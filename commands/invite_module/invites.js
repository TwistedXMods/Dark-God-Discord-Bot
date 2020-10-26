const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");


module.exports.run = async (message) => {
  //message.delete();
  const { guild } = message

  guild.fetchInvites().then((invites) => {
    const inviteCounter = {
      bob: 19,
      joe: 30,
    }

    invites.forEach((invite) => {
      const { uses, inviter } = invite
      const { username, discriminator } = inviter

      const name = `${username}#${discriminator}`

      inviteCounter[name] = (inviteCounter[name] || 0) + uses
    })
    let bot1embed = new Discord.RichEmbed()

    .setAuthor(`Server Invites`)
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addField('Invites:', )
    //.addField('' , '')
   // message.channel.send(bot1embed);
    //let bot1embed = 'Invites:'

    const sortedInvites = Object.keys(inviteCounter).sort(
      (a, b) => inviteCounter[b] - inviteCounter[a]
    )

    console.log(sortedInvites)

    sortedInvites.length = 3

    for (const invite of sortedInvites) {
      const count = inviteCounter[invite]
      bot1embed += `\n${invite} has invited ${count} member(s)!`
    }
    message.channel.send(bot1embed);
    //message.reply(bot1embed)
  
  })
},
module.exports.help = {
    name: "invites",
    cooldown: 5,
}
