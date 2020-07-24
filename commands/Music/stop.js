exports.run = (client, message, args) =>{
    message.delete();
    if(!message.member.voiceChannel)
        return message.channel.send("You are not in a voice channel");
    else{
        message.channel.send("Bye bye!");
        return message.guild.me.voiceChannel.leave();
    }	
        
}

module.exports.help = {
    name: "stop"
}