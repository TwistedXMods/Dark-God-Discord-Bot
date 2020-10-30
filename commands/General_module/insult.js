const request = require('superagent');

module.exports.run = async (bot, message, args) => {
    

        const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.get(message.author.id);
        request.get('https://evilinsult.com/generate_insult.php')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    const api = res.body;
                    message.channel.send(`${user}, ${api.generate_insult}`);
                } 
                else {
                    console.log(`REST call failed: ${err}`)
                }
            });
    },

    //http://quandyfactory.com/insult/json/
module.exports.help = {
    name: 'insult',
    description: 'insults the tagged user or the message sender if no one is tagged',
    cooldown: 3,

}