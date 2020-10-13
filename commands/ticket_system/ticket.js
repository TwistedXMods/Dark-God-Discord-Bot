// © 2019 Fraffel Media. MultiBot is created by FAXES (FAXES#8655). View the license!
const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    //if (!message.guild.channel.find(channel => channel.id === config["channel_setup"].Support_channel)) return message.channel.send(`This is Not a Support Chat pls go to a support chat to use this command.`).then(msg => msg.delete(15000));
    if (!message.guild.roles.find(role => role.id === config["ticket_system"].support_role)) return message.channel.send(`No role to create ticket. Please contact the server owner.`).then(msg => msg.delete(15000));
    
    message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
        moveTicket(c)
        let roleSupportRole = message.guild.roles.find(role => role.id === config["ticket_system"].support_role);
        let roleEveryone = message.guild.roles.find(role => role.name === "@everyone");
        c.overwritePermissions(roleSupportRole, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(roleEveryone, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.setTopic(`Ticket ID: ${message.author.id} | Creator: ${message.author.username}`)
        message.channel.send(`:white_check_mark: ***<@${message.author.id}> Your ticket has been created, <#${c.id}>.***`).then(msg => msg.delete(15000));
        const embed = new Discord.RichEmbed()
        .setColor(botconfig["bot_setup"].main_embed_color)
            .setDescription(`**Dear <@${message.author.id}>!**\n\nThank you for reaching out to our support team! \n\n We will get back to you as soon as possible.\n To close this ticket use \`--close\`.`)
            .setTimestamp()
            .setFooter(botconfig["bot_setup"].copyright)
        c.send(embed)

        if(config["ticket_system"].auto_reply) {
            if(!message.guild.channels.find(channel => channel.name === c.id)) return
            const filter = m => m.author.id === message.author.id;
            c.awaitMessages(filter, { max: 1, time: ms('1d') }).then(idfk => {
                c.send(config["ticket_system"].auto_reply_message)
            })
        }
    }).catch(console.error);
    async function moveTicket(c) {
        await c.setParent(config["channel_setup"].ticket_category);
    };
}

module.exports.help = {
    name: "new",
    cooldown: 5,
}