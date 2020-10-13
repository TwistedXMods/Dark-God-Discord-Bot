const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
.setColor(botconfig["bot_setup"].main_embed_color)

.setAuthor(`Help Page`)

.addField('Bots Prefix' , `${botconfig["bot_setup"].prefix}`)

.addField('Admin Commands' , 'addrole | ban | clear | kick | mute | removerole ')
 
.addField('emojis Commands','emojify | emojis')

.addField('Fun Commands' , 'deep | memepoke | moji | remindme | speak | roll | f | hammer | punch | advice | fight | shibe | slap | smack | smug | cowsay')

.addField('General Commands','afk | rolldice | today-in-hisotry: { Example 08 26} | insult @ a user')

.addField('info Commands','shop | help | botnews | serverinfo | serverinvite | userinfo | YT | twitch | support')

.addField('jokes Commands','amiajoke | joke | dadjoke')

.addField('Moderation Commands','| say | unwarn | warn | warnlvl | announce')

.addField('Randomstuff Commands','distance | dogs | randomcolor')

.addField('Utility Commands' ,'ping | report | timer | uptime')

.addField('level Commands' ,'level " level <user> "')

.addField('verify Commands' ,'verify " Verify yourself on our server"')

.addField('Support Commands' ,'add | remove | new | close | rename')

.addField('FiveM Game Servers' ,'server1 | server2 | cad | news | keys')

.addField('Tools Commands' ,'whois " IP Lookup "| myname | userrole | dm = " DM a user in the server " | ad | announce = " <channel id> <msg> "')

.addField('Misc Commands' ,'covid "all/US/JP ETC" | weather | ')

.addField('Bot Owner Commands' ,'shutdown | blacklist | leave | reboot | reload | setstatus | setgame')

.addBlankField(true)
    .addField('Dark God ',' Important Links')
    .addField('Bot invite', 'https://top.gg/bot/491320185655918593')
    .addField('Forum', 'https://twistedxmods.com/')
    .addField('Donate', 'https://www.paypal.com/paypalme/TwistedXModz')
    .addField('Support Server', 'https://discord.gg/5GMNEYM')
    .addField('Store', 'https://twistedxmods.com/dbtech-ecommerce/')

.setTimestamp()
.setFooter(botconfig["bot_setup"].copyright);

message.author.send(botembed);
}
module.exports.help = {
    name: "help",
    cooldown: 5,
}