const fetch = require('node-fetch'),
Discord = require('discord.js');
const botconfig = require("../../botconfig.json");
const cooldown = new Set();
module.exports.run = async (bot, message, args ) => {
  //run: async (bot, message, args) => {
    
    // fetch the data from the API
    const data = await fetch(`http://ipwhois.app/json/${args}`).then(response => {
      return response.json();
    });

//backup API URL
//http://ip-api.com/json/

    // the API returns a fail response for invalid queries
    if (data.status === 'fail') {
      return message.channel.send(data.message).catch(console.error);
    }

     /*
    Checks if author is inside the cooldown list
    */
   if (cooldown.has(message.author.id && message.guild.id)) {
    return message.reply(`This command have a cooldown of 5 **Seconds**`);
}
/*
  Command's cooldown due to spam issues
*/
cooldown.add(message.author.id && message.guild.id);
setTimeout(() => {
    cooldown.delete(message.author.id && message.guild.id);
}, 5000);

    // we got the data successfully - send a response message
    message.author.send(new Discord.MessageEmbed()
      .setThumbnail(`https://i.ibb.co/6b1PtGh/IP.jpg`)
      .setColor(botconfig["bot_setup"].main_embed_color)
      .setAuthor(`IP Lookup Response`, message.author.avatarURL)
      .setDescription(`
      Completed Requests: ${data.completed_requests}
      IP: ${data.ip} 
      Type: ${data.type}
      ISP: ${data.isp}
      Continent: ${data.continent}
      Continent Code: ${data.continent_code}
      Country: ${data.country}
      Country Code: ${data.country_code}
      Country Capital: ${data.country_capital}
      Country Phone: ${data.country_phone}
      Country Neighbours: ${data.country_neighbours}
      Region: ${data.region}
      City: ${data.city}
      Latitude: ${data.latitude}
      Longitude: ${data.longitude}
      ASN: ${data.asn}
      Organization: ${data.org}
      Timezone: ${data.timezone}
      Timezone Name: ${data.timezone_name}
      Currency Code: ${data.currency_code}
      Currency Rates: ${data.currency_rates}
      `)

      //.setDescription(`
      //Status: ${data.status}
      //IP: ${data.query} 
      //ISP: ${data.isp}
      //CountryCode: ${data.countryCode}
      //Region: ${data.region}
      //Region Name: ${data.regionName}
      //City: ${data.city}
      //Zip Code: ${data.zip}
      //Latitude: ${data.lat}
      //Longitude: ${data.lon}
      //Timezone: ${data.timezone}
      //Organization: ${data.org}
      //AS: ${data.as}
      //Message: ${data.message}
      //`)
      .setFooter(botconfig["bot_setup"].copyright)
      //.setTimestamp()
    ).catch(console.error);
  }

  //backup code
  //Port: ${data.port}
  //Location: ${data.location}
  //Province: ${data.provine}
 //Orginisation: ${data.orginisation}
 //Postal: ${data.postal}
  module.exports.help = {
    name: 'whois',
    aliases: ['ipl'],
    category: 'info',
    description: 'Ricava informazioni da un ip',
    usage: '[command | alias]',
    cooldown: 6,
  }