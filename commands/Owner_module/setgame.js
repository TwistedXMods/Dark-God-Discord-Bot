const setPresence = require("discord.js")
exports.run = (client, message, args) => {

  
  if (message.author.id !== "392855285263499274") return message.reply('You do not have the permission to use this command!');
    if(!args[0]) return;
    if(args[0] === 'game') return message.reply('Please tell me a game to play!');
    if(args[0] === 'default') {
      args = `--help | Protecting ${client.guilds.size} servers!`
      message.reply(`I am now playing \`${args}\`.`);
      client.user.setPresence({ game: { name: args, type: 1 } });
    }else{
     args = args.join(" ");
     message.reply(`I am now playing \`${args}\`.`);
     client.user.setPresence({ game: { name: args, type: 0 } });
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'setgame',
    description: 'Sets the bot\'s playing status.',
    usage: 'setgame <playing status>',
  };  