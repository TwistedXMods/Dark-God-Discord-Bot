const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
   
    let bot1embed = new Discord.RichEmbed()
    .setAuthor(`Help Page`)
    .addField('Darks Prefix' , `${botconfig["bot_setup"].prefix}`)
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addField('Admin Commands',`${botconfig["bot_commands"].Admin}`)
 
    .addField('Emojis Commands',`${botconfig["bot_commands"].Emojis}`)
    
    .addField('Fun Commands',`${botconfig["bot_commands"].Fun}`)
    
    .addField('General Commands',`${botconfig["bot_commands"].General}`)
    
    .addField('info Commands',`${botconfig["bot_commands"].info}`)
    
    .addField('Jokes Commands',`${botconfig["bot_commands"].Jokes}`)
    
    .addField('Meme Commands',`${botconfig["bot_commands"].Meme}`)
    
    .addField('NSFW Commands',`${botconfig["bot_commands"].NSFW}`)
    
    .addField('Moderation Commands',`${botconfig["bot_commands"].Moderation}`)
    message.author.send(bot1embed);
    
    let bot2embed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addField('Randomstuff Commands',`${botconfig["bot_commands"].Randomstuff}`)

    .addField('Utility Commands',`${botconfig["bot_commands"].Utility}`)
    
    .addField('Level Commands',`${botconfig["bot_commands"].Level}`)
    
    .addField('Verify Commands',`${botconfig["bot_commands"].Verify}`)
    
    .addField('Support Commands',`${botconfig["bot_commands"].Support}`)
    
    .addField('FiveM Game Servers',`${botconfig["bot_commands"].FiveM}`)
    
   // .addField('Music Commands',`${botconfig["bot_commands"].Music}`)

    .addField('Tools Commands',`${botconfig["bot_commands"].Tools}`)
    
    .addField('Misc Commands',`${botconfig["bot_commands"].Misc}`)

    .addField('Game Stats Commands',`${botconfig["bot_commands"].Stats}`)
    
    .addField('Bot Owner Commands',`${botconfig["bot_commands"].Owner}`)
    message.author.send(bot2embed);

    let bot3embed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addField('Darks',`${botconfig["bot_messages"].Important}`)
    .addField('Darks Prefix',`${botconfig["bot_setup"].prefix}`)
    .addField('invite',`${botconfig["bot_links"].invite}`)
    .addField('Forum',`${botconfig["bot_links"].Forum}`)
    .addField('Donate',`${botconfig["bot_links"].Donate}`)
    .addField('Support Server', `${botconfig["bot_links"].Support_Server}`)
    .addField('Store', `${botconfig["bot_links"].Store}`)
.setFooter(botconfig["bot_setup"].copyright);
    message.author.send(bot3embed);
}
module.exports.help = {
    name: "help",
    cooldown: 5,
}