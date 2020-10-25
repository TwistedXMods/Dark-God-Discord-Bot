const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
.setColor(botconfig["bot_setup"].main_embed_color)
.setAuthor(`Shop Page`, message.author.avatarURL)
.addField('Store Link' , 'https://twistedxmods.com/dbtech-ecommerce/')
//.addField('GTAV PC 500 Mil Recovery' , 'What do you get?')
//.addField('500 Mil GTA $$' , 'Rank 1-500'  , 'true')
//.addField('+Max Skill' , '+Trophies' , 'true')
//.addField('+Hair Styles' , '+Tattoos' , 'true')
//.addField('+Clothing' , '+Chrome Rims' , 'true')
//.addField('+Vehicle Mods' , '+Weapon Mods' , 'true')
//.addField('+Weapon Tints' , '   Only $5'  , 'true')

//.addField('GTAV PC 1 Billion Recovery' , 'What do you get?')
//.addField('1 Billion GTA $$' , 'Rank 1-700'  , 'true')
//.addField('+Max Skill' , '+Trophies'  , 'true')
//.addField('+Hair Styles' , '+Tattoos'  , 'true')
//.addField('+Clothing' , '+Chrome Rims'  , 'true')
//.addField('+Vehicle Mods' , '+Weapon Mods'  , 'true')
//.addField('+Weapon Tints' , '  Only $10'  , 'true')

//.addField('GTAV Online Money Drop' , 'What do you get?')
//.addField('Money Drop in a GTA V Private lobby for 1 hour' , 'Only $2'  , 'true')

 .addField('Payment Method' , 'PayPal or Steam GifCard' , true)

 //.addField('How to order' , 'Send a DM to Twisted X 420#9387 with what you want to order and i will DM you back as soon as I can')


//.addField('GTAV PC 500 Mil Recovery' , 'What do you get? = | 500 Mil GTA online $$ | Rank 1-500 | +Max Skill | +Trophies | +Hair Styles | +Tattoos | +Clothing | +Chrome Rims | +Vehicle Mods | +Weapon Mods | +Weapon Tints | Only $5' )

 //.addField('GTAV PC 1 Bill Recovery' , 'What do you get? = | 1 Billion GTA online $$ | Rank 1-700 | +Max Skill | +Trophies | +Hair Styles | +Tattoos | +Clothing | +Chrome Rims | +Vehicle Mods | +Weapon Mods | +Weapon Tints | Only $10' )

//.setTimestamp()
.setFooter(botconfig["bot_setup"].copyright);
    
message.author.send(botembed);
}
module.exports.help = {
    name: "shop",
    cooldown: 5,
}