const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
.setColor('#FC0000')

.setAuthor(`Help Page`)

.addField('Bots Prefix' , '-/dark')

.addField('Admin Commands' , 'addrole | ann | ban | clear | hackban | kick | mute | removerole ')
   
.addField('Economy Commands','crypto: not working yet')
 
.addField('emojis Commands','emojify | emojis')

.addField('Fun Commands' , 'deep | memepoke | moji | remindme | speak | roll | f | hammer | punch | advice | fight | shibe | slap | smack | smug | cowsay')

.addField('General Commands','afk | rolldice | today-in-hisotry: { Example 08 26} | insult @ a user')

.addField('info Commands','shop | help | botnews | serverinfo | serverinvite | userinfo | YT | twitch | support')

.addField('jokes Commands','amiajoke | joke | dadjoke')

.addField('Moderation Commands','chatlock | chatunlock | say | sayem | unwarn | warn | warnlvl')

.addField('Randomstuff Commands','distance | dogs | randomcolor')

.addField('XP Commands','level')

.addField('Utility Commands' ,'ping | report | timer | uptime | setwelcome | suggest')

.addField('Support Commands' ,'add | remove | new | close | rename')

.addField('Tools Commands' ,'whois " IP Lookup " | json "<ID> <speak>" | myname | userrole')

.addField('Misc Commands' ,'covid "all/US/JP ETC" | weather | ')

.addField('Setup Commands' ,'config | count | roles | welcomeroles')

.addField('Bot Owner Commands' ,'shutdown | blacklist | leave | reboot | reload | setstatus | setgame')
//react " <react> " | react-custom " <react-custom> "
//findusers " <name> "

.addField('Bot invite' ,'https://discord.com/oauth2/authorize?client_id=491320185655918593&scope=bot&permissions=66186303')

.setTimestamp()
.setFooter('© 2020 Twisted X Modz - All Rights Reserved');
    
message.author.send(botembed);

}

module.exports.help = {
    name: "help",
    cooldown: 5,
}