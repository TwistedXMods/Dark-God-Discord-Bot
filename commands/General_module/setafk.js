exports.run = (client, message, args) =>{

    
    const setStatus = message.content.split(' ');

    if(setStatus[1] === 'afk'){
        client.user.setAFK(true);
        message.channel.send(`your status has been set to afk! ${message.author}`);
        //message.channel.send('Your status has been set to afk! ${message.author}');
    }

    else if(setStatus[1] === 'notafk'){
        client.user.setAFK(false);
        message.channel.send(`Welcome back ${message.author}`);
    }

    else if(!setStatus[1] || setStatus[1] === undefined){
        message.channel.send("You did not choose afk or notafk as current status!");
    }

    else{
        message.channel.send("You did not choose afk or notafk as current status!");
    }

}
module.exports.help = {
    name: "afk-old",
    cooldown: 5,
}