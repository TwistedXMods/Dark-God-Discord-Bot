const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const botconfig = require("../../botconfig.json");
const fortnite = require("simple-fortnite-api"); client = new fortnite("fe5d03e2-874d-4048-8ae0-14f159404007");


    module.exports.run = async (bot, message, args) => {

        message.delete();

        if(!args[0]) return message.channel.send("Please supply a username.");
        if(args[1] && !["lifetime", "solo", "duo", "squad"].includes(args[1])) return message.channel.send("Usage: `!fortnite <username> <gametype>`\nGameTypes: Lifetime, Solo, Duo, Squad");
        let gametype = args[1] ? args[1].toLowerCase() : "lifetime";

        let data = await client.find(args[0])
        if(data && data.code === 404) return message.channel.send("Unable to find a user with that username.")
            const { image, url, username } = data;
            const { scorePerMin, winPercent, kills, score, wins, kd, matches } = data[gametype]

                const embed = new RichEmbed()
                    .setColor(botconfig["bot_setup"].main_embed_color)
                    .setAuthor(`Epic Games (Fortnite) | ${username}`, image)
                    .setThumbnail(image)
                    .setDescription(stripIndents`**Gamemode:** ${gametype.slice(0, 1).toUpperCase() + gametype.slice(1)}
                    **Kills:** ${kills || 0}
                    **Score:** ${score || 0}
                    **Score Per Min:** ${scorePerMin || 0}
                    **Wins:** ${wins || 0}
                    **Win Ratio:** ${winPercent || "0%"}
                    **Kill/Death Ratio:** ${kd || 0}
                    **Matches Played:** ${matches || 0}
                    **Link:** [link to profile](${url})`)
                    .setFooter(botconfig["bot_setup"].copyright)
                    .setTimestamp()

                    message.channel.send(embed)

                }

module.exports.help = {
    name: "fortnite",
        description: "Displays a user's fortnite stats!",
        usage: "<user> <platform>",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["ftn"] 
}