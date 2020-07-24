const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports.run = async (bot, message, args) => {
    message.delete();
//module.exports = {
  
  //run: async (bot, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please give the name of country")
    }
    
    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases
      
      let botembed = new discord.RichEmbed()
      .setTitle("Global Cases")
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(botembed);
      
    } else {
      let corona = await track.countries(args.join(" ")) //change it to countries
      
      let botembed = new discord.RichEmbed()
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
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
