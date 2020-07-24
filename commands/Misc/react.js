module.exports.run = async (client, api, config, message, args) => {
    message.delete();
        message.react('😄');
    },

module.exports.help = {
    name: 'react',
    description: 'emoji reaction toward specific comments',
    usage: '<react>',
    cooldown: 5,

}