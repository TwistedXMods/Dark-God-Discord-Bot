const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
   
    let bot1embed = new Discord.RichEmbed()
    .setAuthor(`Help Page`)
    .addField('Bots Prefix' , `${botconfig["bot_setup"].prefix}`)
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addField('Admin Commands' , 'addrole | ban | clear | kick | mute | removerole ')
 
    .addField('emojis Commands','emojify | emojis')
    
    .addField('Fun Commands' , 'deep | memepoke | moji | remindme | speak | roll | f | hammer | punch | advice | fight | shibe | slap | smack | smug | cowsay')
    
    .addField('General Commands','afk | rolldice | today-in-hisotry: { Example 08 26} | insult @ a user')
    
    .addField('info Commands','shop | help | info | botnews | serverinfo | serverinvite | userinfo | YT | twitch | support')
    
    .addField('jokes Commands','amiajoke | joke | dadjoke')
    
    .addField('Meme Commands','meme | gayrate @user | dankmeme')
    
    .addField('NSFW Commands','4k | anal | ass | pgif | hentai_anal | holo | lewd | pussy | thigh ')
    
    .addField('Moderation Commands','| say | unwarn | warn | warnlvl | announce')
    message.author.send(bot1embed);
    
    let bot2embed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addField('Randomstuff Commands','distance | dogs | randomcolor')

    .addField('Utility Commands' ,'ping | report | timer | uptime')
    
    .addField('level Commands' ,'level " level <user> "')
    
    .addField('verify Commands' ,'verify " Verify yourself on our server"')
    
    .addField('Support Commands' ,'add | remove | new | close | rename')
    
    .addField('FiveM Game Servers' ,'server1 | server2 | cad | news | keys')
    
    .addField('Tools Commands' ,'whois " IP Lookup "| myname | userrole | dm = " DM a user in the server " | ad |')
    
    .addField('Misc Commands' ,'covid "all/US/JP ETC" | weather | ')
    
    .addField('Bot Owner Commands' ,'shutdown | blacklist | leave | reboot | reload | setstatus | setgame | gann | backdoor | ')
    message.author.send(bot2embed);

    let bot3embed = new Discord.RichEmbed()
    .setColor(botconfig["bot_setup"].main_embed_color)
    .addField('Dark God ',' Important Links')
    .addField('Bot invite', 'https://top.gg/bot/491320185655918593')
    .addField('Forum', 'https://www.twistedxmodz.xyz/')
    .addField('Donate', 'https://www.paypal.com/paypalme/TwistedXModz')
    .addField('Support Server', 'https://discord.gg/5GMNEYM')
    .addField('Store', 'https://www.twistedxmodz.xyz/dbtech-ecommerce/')
.setFooter(botconfig["bot_setup"].copyright);
    message.author.send(bot3embed);

//message.author.send(botembed);
}
module.exports.help = {
    name: "help",
    cooldown: 5,
}