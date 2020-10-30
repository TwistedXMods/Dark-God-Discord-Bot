const Discord = require('discord.js');
const geolib = require('geolib');
const botconfig = require("../../botconfig.json");

exports.run = async (client, message, args) => {

    
    try{
        const coordinates = message.content.split(' ');
        var distance = geolib.getDistance({latitude: coordinates[1], longitude: coordinates[2] }, {latitude: coordinates[3], longitude: coordinates[4]});

        var distanceKM = geolib.convertUnit('km', distance, 4)

        let serverembed = new Discord.MessageEmbed()
        .setColor(botconfig["bot_setup"].main_embed_color)
            .addField("latitude1 & longitude1", `${coordinates[1]}, ${coordinates[2]}`, true)
            .addField("latitude2 & longitude2", `${coordinates[3]}, ${coordinates[4]}`, true)
            .addField("Distance (km)", `${distanceKM}`)
            .setFooter(botconfig["bot_setup"].copyright);
        message.channel.send(serverembed);    
    }
    catch(error){
        message.channel.send("You must type 4 numbers !distance [latitude1] [longitude1] [latitude2] [longitude2], for example 4.1233123 5344.1231231 6.3423423 712312.123123123");
    }

}


module.exports.help = {
    name: "distance",
    cooldown: 5,
}