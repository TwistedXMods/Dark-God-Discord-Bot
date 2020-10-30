// REMOVING OR EDITING THIS FILE IS A BREACH OF THE LICENSE. LEAVE IT AS IS AND DON'T DISABLE IT! [START NO EDIT]
// ©  MultiBot is created by Ianjkian (Ianjkian#3906). View the license!
const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    if(!args[0]) return message.channel.send("Use a image. Eg; 1-5.").then(msg => msg.delete(5000));

    if(args[0] == 1){
        message.channel.send({
            files: [
              "/home/STTModBot/commands/images/1.gif"
            ]
          });
    } else if (args[0] == 2){
        message.channel.send({
            files: [
              "/home/STTModBot/commands/images/2.gif"
            ]
          });
    } else if (args[0] == 3){
        message.channel.send({
            files: [
              "/home/STTModBot/commands/images/3.gif"
            ]
          });
    } else if (args[0] == 4){
        message.channel.send({
            files: [
              "/home/STTModBot/commands/images/4.gif"
            ]
          });
    } else if (args[0] == 5){
        message.channel.send({
            files: [
              "/home/STTModBot/commands/images/5.gif"
            ]
          });
    } else return
}

module.exports.help = {
    name: "dankerimg",
}
// REMOVING OR EDITING THIS FILE IS A BREACH OF THE LICENSE. LEAVE IT AS IS AND DON'T DISABLE IT! [END NO EDIT]


