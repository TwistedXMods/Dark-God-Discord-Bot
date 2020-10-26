const { RichEmbed } = require("discord.js");
const botconfig = require("../../botconfig.json");
const { stripIndents } = require("common-tags");
const overwatch = require("overwatch-api");

module.exports = {
    run: async (bot, message, args) => {
        message.delete();
        if(!args[0]) return message.channel.send(`${botconfig["bot_messages"].overwatch_supply}`);
        if(!args[1] || (args[1] && !["pc", "xbl", "psn"].includes(args[1]))) return message.channel.send(`${botconfig["bot_messages"].overwatch_error}`);
        if(args[0].includes("#")) args[0] = args[0].replace(/#/g, "-");

            overwatch.getProfile(args[1], "global", args[0], (err, json) => {
                if (err) return message.channel.send(`${botconfig["bot_messages"].overwatch_find}`);
                const { games, level, portrait, username, playtime: { competitive, quickplay }, private } = json;
                const { sportsmanship, shotcaller, teammate } = json.endorsement;
                const { won, draw, played, lost, win_rate } = json.games.competitive;

                if(private) return message.channel.send(`${botconfig["bot_messages"].overwatch_private}`);
                        
                    const embed = new RichEmbed()
                        .setColor(botconfig["bot_setup"].main_embed_color)
                        .setAuthor(`Blizzard (Overwatch) | ${username}`, portrait)
                        .setThumbnail(portrait)
                        .addField("General:", stripIndents`
                        **Level:** ${level || 0}
                        **Sportsmanship:** ${sportsmanship.rate || 0} / 100
                        **Shotcaller:** ${shotcaller.rate || 0} / 100
                        **Teammate:** ${teammate.rate  || 0} / 100
                        `)
                        .addField("Competitive:", stripIndents`
                        **Played:** ${played || 0}
                        **Won:** ${won || 0}
                        **Draw:** ${draw || 0}
                        **Lost:** ${lost || 0}
                        **Win Rate:** ${win_rate || 0}
                        **Playtime:** ${competitive || 0}
                        `, true)
                        .addField("QuickPlay:", stripIndents`
                        **Played:** ${games.quickplay.played || "N/A"}
                        **Won:** ${games.quickplay.won || 0}
                        **Playtime:** ${quickplay || 0}
                        `, true)
                        .setTimestamp();

                    message.channel.send(embed);
                            
                })
    }
}
module.exports.help = {
    name: "overwatch",
    description: "Displays a user's overwatch stats!",
    usage: "<user> <platform>",
    category: "miscellaneous",
    accessableby: "Members",
    aliases: ["ow"] 
}