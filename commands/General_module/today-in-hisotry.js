const request = require('node-superfetch');
const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    

        const month = parseInt(args[0]);
        const day = parseInt(args[1]);

        if(isNaN(month)) {
            return message.reply('please enter a valid month { Example = " 09 "}');
        }

        if(isNaN(day)) {
            return message.reply('please enter a valid date { Example = " 26 "}');
        }

        const date = month && day ? `/${month}/${day}` : '';
		try {
			const { text } = await request.get(`http://history.muffinlabs.com/date${date}`);
			const body = JSON.parse(text);
			const events = body.data.Events;
			const event = events[Math.floor(Math.random() * events.length)];
			const embed = new Discord.MessageEmbed()
            .setColor(botconfig["bot_setup"].main_embed_color)
				.setURL(body.url)
				.setTitle(`On this day (${body.date})...`)
                .setFooter(botconfig["bot_setup"].copyright)
				.setDescription(`${event.year}: ${event.text}`)
				.addField('❯ See More',
                    event.links.map(link => `[${link.title}](${link.link.replace(/\)/g, '%29')})`).join(', '));
                
            
            return message.channel.send(embed);
        } 
        catch (err) {
			if (err.status === 404 || err.status === 500) return message.reply('Invalid date.');
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
    }
    

module.exports.help = {
    name: 'today-in-hisotry',
    description: 'gives info about what important event happend today in hisotry',
    cooldown: 3,
}