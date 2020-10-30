const Discord = require('discord.js');

exports.run = (client, message, args) => {

    
    const setStatus = message.content.split(' ');

   // if (!message.author.id !== "392855285263499274") return message.reply('You do not have the permission to use this command!');

   if(!message.member.hasPermission("ADMINISTATOR")){
    return message.channel.send("You don't have the permissions to use this command!");
}

    else if(setStatus[1] === 'idle'){
        client.user.setStatus('idle')
            .then(message.channel.send("My status has been set to: "+setStatus[1]))
            .catch(console.error);
    } 

    else if(setStatus[1] === 'online'){
        client.user.setStatus('online')
            .then(message.channel.send("My status has been set to: "+ setStatus[1]))
            .catch(console.error);
    }

    else if(setStatus[1] === 'invisible'){
        client.user.setStatus('invisible')
            .then(message.channel.send("My status has been set to: "+ setStatus[1]))
            .catch(console.error);
    }

    else if(setStatus[1] === 'dnd'){
        client.user.setStatus('dnd')
            .then(message.channel.send("My status has been set to: "+ setStatus[1] + "(do not disturb)"))
            .catch(console.error);
    }

    else{
        return message.channel.send("I could not set my status please type one of the following status: idle, online, invisible, dnd (do not disturb)");
    }
}

module.exports.help = {
    name: "setstatus",
    ownerOnly: true,
}
