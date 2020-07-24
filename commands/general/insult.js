const request = require('superagent');

module.exports.run = async (bot, message, args) => {
    message.delete();

        const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.get(message.author.id);
        request.get('http://quandyfactory.com/insult/json/')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    const fancyinsult = res.body;
                    message.channel.send(`${user}, ${fancyinsult.insult}`);
                } 
                else {
                    console.log(`REST call failed: ${err}`)
                }
            });
    },
module.exports.help = {
    name: 'insult',
    description: 'insults the tagged user or the message sender if no one is tagged',
    cooldown: 3,

}