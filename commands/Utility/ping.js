exports.run = (bot, msg, args) => {
    msg.delete();
    msg.channel.send(':watch: | Ping!').then(m => {
        m.edit(`:watch: | Pong! \`${m.createdTimestamp - msg.createdTimestamp}ms\``);
    });
};

exports.help = {
    name: 'ping',
    usage: 'ping',
    description: 'Pings the bot to check its connection speed.',
    cooldown: 5,
};
