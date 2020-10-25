const Subiex = require('../../index.js')
const botconfig = require('../../botconfig.json')
const Utils = require('../../JS/utils')

//Subiex.registerCommand('gayrate', 'default', (message, bot) => {
  module.exports.run = async (bot, message,) => {
    message.delete();
  let myMention = message.mentions.users.array()[0]

  const anti = '392855285263499274'

  const randomnumber = Math.floor(Math.random() * 101)
  if (message.content === '') {
    message.channel.send({
      embed: {
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        title: 'Scanning...',
        thumbnail: {
          url: message.author.avatarURL
        },
        description: `${message.author.username} is ${randomnumber}% gay! :gay_pride_flag:`,
        color: 15158332,
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL
        }
      }
    })
  }
  else if (myMention.id === botconfig.master) {
    const random = Math.floor(Math.random() * 2)

    console.log('It is klendi')
    message.channel.send({
      embed: {
        author: {
          name: myMention.username,
          icon_url: myMention.avatarURL
        },
        title: 'Scanning...',
        thumbnail: {
          url: myMention.avatarURL
        },
        description: `${myMention.username} is ${random}% gay! :gay_pride_flag:`,
        color: 15158332,
        timestamp: new Date(),
        footer: {
          icon_url: myMention.avatarURL
        }
      }
    })
  }
  else if (myMention.id === anti) {
    const random = Math.floor(Math.random() * 200000)

    console.log('It is klendi')
    message.channel.send({
      embed: {
        author: {
          name: myMention.username,
          icon_url: myMention.avatarURL
        },
        title: 'Scanning...',
        thumbnail: {
          url: myMention.avatarURL
        },
        description: `${myMention.username} is ${random}% gay! :gay_pride_flag:`,
        color: 15158332,
        timestamp: new Date(),
        footer: {
          icon_url: myMention.avatarURL
        }
      }
    })
  }
  else if (myMention.id !== botconfig.master) {
    message.channel.send({
      embed: {
        author: {
          name: myMention.username,
          icon_url: myMention.avatarURL
        },
        title: 'Scanning...',
        thumbnail: {
          url: myMention.avatarURL
        },
        description: `${myMention.username} is ${randomnumber}% gay! :gay_pride_flag:`,
        color: 15158332,
        timestamp: new Date(),
        footer: {
          icon_url: myMention.avatarURL
        }
      }
    })
  }

}
module.exports.help = {
  name: 'gayrate',
  description: 'Generate Random gayrate for a user',
  usage: 'gayrate @user',
  cooldown: 5,
}
