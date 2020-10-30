const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
   
    let bot1embed = new Discord.MessageEmbed()
    .setAuthor(`Help - Main Menu`)
    .addField('Prefix' , `${botconfig["bot_setup"].prefix}`)
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addFields(
		{ name: 'Admin Menu', value: `${botconfig["bot_menu"].Admin_Menu_use}`, inline: true  },
		{ name: 'Emojis Menu', value:`${botconfig["bot_menu"].Emojis_Menu_use}`, inline: true },
        { name: 'Fun Menu', value: `${botconfig["bot_menu"].Fun_Menu_use}`, inline: true },
        { name: 'General Menu', value: `${botconfig["bot_menu"].General_Menu_use}`, inline: true },
        { name: 'info Menu', value: `${botconfig["bot_menu"].info_Menu_use}`, inline: true },
        { name: 'Jokes Menu', value: `${botconfig["bot_menu"].Jokes_Menu_use}`, inline: true },
        { name: 'Meme Menu', value: `${botconfig["bot_menu"].Meme_Menu_use}`, inline: true },
        { name: 'NSFW Menu', value: `${botconfig["bot_menu"].NSFW_Menu_use}`, inline: true },
        { name: 'Moderation Menu', value: `${botconfig["bot_menu"].Moderation_Menu_use}`, inline: true },
        { name: 'Randomstuff Menu', value: `${botconfig["bot_menu"].Randomstuff_Menu_use}`, inline: true },
        { name: 'Utility Menu', value: `${botconfig["bot_menu"].Utility_Menu_use}`, inline: true },
        { name: 'Level Menu', value: `${botconfig["bot_menu"].Level_Menu_use}`, inline: true },
        { name: 'Verify Menu', value: `${botconfig["bot_menu"].Verify_Menu_use}`, inline: true },
        { name: 'Support Menu', value: `${botconfig["bot_menu"].Support_Menu_use}`, inline: true },
        { name: 'FiveM Game Servers', value: `${botconfig["bot_menu"].FiveM_Menu_use}`, inline: true },
        { name: 'Tools Menu', value: `${botconfig["bot_menu"].Tools_Menu_use}`, inline: true },
        { name: 'Misc Menu', value: `${botconfig["bot_menu"].Misc_Menu_use}`, inline: true },
        { name: 'Game Stats Menu', value: `${botconfig["bot_menu"].Stats_Menu_use}`, inline: true },
        { name: 'Bot Owner Menu', value: `${botconfig["bot_menu"].Owner_Menu_use}`, inline: true },
	)
    .setFooter(botconfig["bot_setup"].copyright);
    message.author.send(bot1embed);

    //let bot3embed = new Discord.MessageEmbed()
    //.setColor(botconfig["bot_setup"].main_embed_color)
    //.addField('Darks',`${botconfig["bot_messages"].Important}`)
    //.addField('invite',`${botconfig["bot_links"].invite}`)
    //.addField('Forum',`${botconfig["bot_links"].Forum}`)
    //.addField('Donate',`${botconfig["bot_links"].Donate}`)
    //.addField('Support Server', `${botconfig["bot_links"].Support_Server}`)
    //.addField('Store', `${botconfig["bot_links"].Store}`)
//.setFooter(botconfig["bot_setup"].copyright);
   // message.author.send(bot3embed);
}
module.exports.help = {
    name: "help",
    cooldown: 5,
}