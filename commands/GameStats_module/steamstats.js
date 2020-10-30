const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");
const botconfig = require("../../botconfig.json");
const { stripIndents } = require("common-tags");
const dateFormat = require("dateformat");

    module.exports.run = async (bot, message, args) => {
        
        const token = "9053E34FE0DD63A7F506FCB3B29EBC15"; //I reset mine.
        if(!args[0]) return message.channel.send("Please provide an account name!");
        const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${token}&vanityurl=${args.join(" ")}`;

        fetch(url).then(res => res.json()).then(body => {
            if(body.response.success === 42) return message.channel.send(`${botconfig["bot_messages"].steam_user_message}`);

                const id = body.response.steamid;
                const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${token}&steamids=${id}`;
                const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${token}&steamids=${id}`;
                const state = ["Offline", "Online", "Busy", "Away", "Snooze", "Looking to trade", "Looking to play"];

        fetch(summaries).then(res => res.json()).then(body => {
            if(!body.response) return message.channel.send(`${botconfig["bot_messages"].steam_user_message}`);
            const { personaname, avatarfull, realname, personastate, loccountrycode, profileurl, timecreated } = body.response.players[0];

        fetch(bans).then(res => res.json()).then(body => {
            if(!body.players) return message.channel.send(`${botconfig["bot_messages"].steam_message_error}`);
            const { NumberOfVACBans, NumberOfGameBans} = body.players[0];

            const embed = new RichEmbed()
            .setColor(botconfig["bot_setup"].main_embed_color)
                .setAuthor(`Steam Services | ${personaname}`, avatarfull)
                .setThumbnail(avatarfull)
                .setDescription(stripIndents`**Real Name:** ${realname || "Unknown"}
                **Status:** ${state[personastate]}
                **Country:** :flag_${loccountrycode ? loccountrycode.toLowerCase() : "white"}:
                **Account Created:** ${dateFormat(timecreated * 1000, "d/mm/yyyy (h:MM:ss TT)")}
                **Bans:** Vac: ${NumberOfVACBans}, Game: ${NumberOfGameBans}
                **Link:** [link to profile](${profileurl})`)
                .setTimestamp();

                message.channel.send(embed)
            })
        })
    })
  }
module.exports.help = {
    name: "steam",
    description: "Get steam statistics of a user",
    usage: "<user>",
    category: "miscellaneous",
    accessableby: "Members"
}