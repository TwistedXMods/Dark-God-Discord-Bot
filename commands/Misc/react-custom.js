module.exports.run = async (client, api, config, message, args) => {
    message.delete();
        const emoji = client.emojis.get(config.emojiID);
        message.react(emoji);
    },

module.exports.help = {
    name: 'react-custom',
    description: 'custom emoji reaction toward specific comments',
    usage: '<react-custom>',
    cooldown: 5,

}