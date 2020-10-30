const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const botconfig = require("../../botconfig.json");
const track = new NovelCovid();
const cooldown = new Set();
module.exports.run = async (bot, message, args) => {
    
//module.exports = {
  
  //run: async (bot, message, args) => {
    
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

    if(!args.length) {
      return message.channel.send("Please give the name of country")
    }
    
    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases
      
      let botembed = new Discord.MessageEmbed()
      .setTitle("Global Cases")
      .setColor(botconfig["bot_setup"].main_embed_color)
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true)
      .setFooter(botconfig["bot_setup"].copyright);
      return message.channel.send(botembed);
      
    } else {
      let corona = await track.countries(args.join(" ")) //change it to countries
      
      let botembed = new Discord.MessageEmbed()
      .setTitle(`${corona.country}`)
      .setColor(botconfig["bot_setup"].main_embed_color)
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true)
      .setFooter(botconfig["bot_setup"].copyright);
      return message.channel.send(botembed);
      
      
    }
    
  }

module.exports.help = {
  name: "covid",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  aliases: ["covid", "covid19"],
  cooldown: 5,

}
