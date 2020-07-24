const Discord = require('discord.js');
let days = 0;
let week = 0;

exports.run = (client, message, args) =>{
    message.delete();
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let serverembed = new Discord.RichEmbed()
        .setColor("#FC0000")
        .setAuthor(`Dark Gaming`, client.user.displayAvatarURL)
        .addField(`Version`,`5.7`, true)
        .addField(`Library`,`Discord.js` , true)
        .addField(`Creator`,`Twisted X 420#9387`, true)
        .addField(`Servers`, `${client.guilds.size}`, true)
        .addField(`Users`, `${client.users.size}`, true)
        .addField(`Invite`, `[Invite Dark God ](https://discordapp.com/oauth2/authorize?client_id=662551798409723965&scope=bot&permissions=66186303)`, true)
        .setFooter(`Uptime: ${uptime}`);

    message.channel.send(serverembed);
}

module.exports.help = {
    name: "info",
    cooldown: 5,
}