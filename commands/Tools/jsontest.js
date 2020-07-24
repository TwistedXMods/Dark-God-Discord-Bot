const test_api = 'http://jsonplaceholder.typicode.com/posts';
const snekfetch = require('snekfetch');
const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    message.delete();

        snekfetch.get(test_api).then(r => {
            // store all info in the array body
            const body = r.body;
            const id = Number(args[0]);
            const speak = args[1];
            if (!id) {
                return message.channel.send('Please supply an ID!');
            }
            if (isNaN(id)) {
                return message.channel.send('Please supply a valid number');
            }

            const entry = body.find(post => post.id == id);
            if (!entry) {
                return message.channel.send('This entry does not exist.');
            }
            console.log(entry);

            if (speak === 'speak') {
                return message.channel.send(`Time to speak gibberish:\n${entry.body}`);
            }
            else {
                const embed = new Discord.RichEmbed()
                    .setAuthor(entry.title)
                    .setDescription(entry.body)
                    .addField('Author ID: ' + entry.id)
                    .setFooter('Post ID: ' + entry.id);

                message.channel.send({ embed: embed });
            }
        });
    },

module.exports.help = {
    name: 'json',
    description: 'Web JSON API Testing',
    usage: 'json <ID> <speak>',
    cooldown: 5,

}