const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const request = require("request");
const botconfig = require("../../botconfig.json")


module.exports = {
    run: async (client, message, args) => {
        message.delete();

        const platforms = ['steam']
        const platform = args[0]
        const playerID = message.toString().slice(message.toString().indexOf(args[1]), message.length);

        if(!platforms.includes(platform)) {
            return message.reply(`${botconfig["bot_messages"].csgo_error}`)
        }

        if(!args[1]) {
            return message.reply(`${botconfig["bot_messages"].csgo_find}`)
        }


        const url =  'https://public-api.tracker.gg/v2/csgo/standard/profile/' + platform + '/' + playerID
        request(url, {
            headers: {
                'TRN-Api-Key' : '17ec97eb-349d-47e2-8ebf-9c823db03514'
            }},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    const response = JSON.parse(body)
                    
                    // Stats
                    const name = response['data']['platformInfo']['platformUserHandle']
                    const timePlayed = response['data']['segments'][0]['stats']['timePlayed']['displayValue']
                    const score = response['data']['segments'][0]['stats']['score']['displayValue']
                    const kills = response['data']['segments'][0]['stats']['kills']['displayValue']
                    const kd = response['data']['segments'][0]['stats']['kd']['displayValue']
                    const damage = response['data']['segments'][0]['stats']['damage']['displayValue']
                    const wins = response['data']['segments'][0]['stats']['wins']['displayValue']
                    const matchesPlayed = response['data']['segments'][0]['stats']['matchesPlayed']['displayValue']
                    const losses = response['data']['segments'][0]['stats']['losses']['displayValue']

                    const answer = new RichEmbed()
                        .setColor(botconfig["bot_setup"].main_embed_color)
                        .setThumbnail(response['data']['platformInfo']['avatarUrl'])
                        .setAuthor(`${name}`)
                        .setDescription(stripIndents`Matches Played: ${matchesPlayed}
                        Time Played: ${timePlayed}
                        Wins: ${wins}
                        Losses: ${losses}
                        Kills: ${kills}
                        Damage: ${damage}
                        Score: ${score}
                        KD: ${kd}`)
                    
                    message.channel.send(answer)
                }
            })
    }
}
module.exports.help = {
    name: "csgo", 
    catergory: "info",
    description: "Tracks CSGO stats",
}