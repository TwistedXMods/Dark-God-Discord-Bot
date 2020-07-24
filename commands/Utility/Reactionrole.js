const { RichEmbed } = require('discord.js');
//const { prefix } = require('../config');

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o=>{});

    const a = message.guild.roles.get('729086344818589748'); // PC
    const b = message.guild.roles.get('729086488414781501'); // Xbox
    const c = message.guild.roles.get('729086569301934100'); // PlayStation
    const d = message.guild.roles.get('722652418910846997'); // R6
    const e = message.guild.roles.get('724524429790412820'); // GTA V Modders
    const f = message.guild.roles.get('722652478864359477'); // GTAV
    const g = message.guild.roles.get('722652514423668786'); // CSGO
    const h = message.guild.roles.get('722652580991336521'); // DBD
    const i = message.guild.roles.get('722652631360602164'); // Apex
    const j = message.guild.roles.get('728776108023218258'); // Fivem
    //const k = message.guild.roles.get('722652631360602164'); // Apex

    const filter = (reaction, user) => [':PC:', ':xbox:', '🇨', ':PlayStation:', ':R6:', 'F', 'G', 'H', 'I', 'J'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new RichEmbed()
        .setTitle('Avaiilable Roles')
        .setDescription(`
        
        :PC: ${a.toString()}
        :xbox: ${b.toString()}
        :PlayStation: ${c.toString()}
        :R6: ${d.toString()}
        E ${e.toString()}
        F ${f.toString()}
        G ${g.toString()}
        H ${h.toString()}
        I ${i.toString()}
        J ${j.toString()}
        `)
        .setColor('#FC0000')
        .setFooter(`ID: ${message.author.id}`);
        
    message.channel.send(embed).then(async msg => {

        await msg.react(':PC:');
        await msg.react(':xbox:');
        await msg.react(':PlayStation:');
        await msg.react(':R6:');
        await msg.react('E');
        await msg.react('F');
        await msg.react('G');
        await msg.react('H');
        await msg.react('I');
        await msg.react('J');
        //await msg.react('k');

        msg.awaitReactions(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
        }).then(collected => {

            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case ':PC:':
                    if (message.member.roles.has(a.id)) {
                        msg.delete(2000);
                        return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                    }
                    message.member.addRole(a).catch(err => {
                        console.log(err);
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`You have been added to the **${a.name}** role!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                case ':xbox:':
                    if (message.member.roles.has(b.id)) {
                        msg.delete(2000);
                        return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                    }
                    message.member.addRole(b).catch(err => {
                        console.log(err);
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`You have been added to the **${b.name}** role!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                case ':PlayStation:':
                    if (message.member.roles.has(c.id)) {
                        msg.delete(2000);
                        return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                    }
                    message.member.addRole(c).catch(err => {
                        console.log(err);
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`You have been added to the **${c.name}** role!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                    case ':R6:':
                        if (message.member.roles.has(c.id)) {
                            msg.delete(2000);
                            return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                        }
                        message.member.addRole(c).catch(err => {
                            console.log(err);
                            return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                        });
                        message.channel.send(`You have been added to the **${c.name}** role!`).then(m => m.delete(3000));
                        msg.delete();
                        break;
                        case 'E':
                            if (message.member.roles.has(c.id)) {
                                msg.delete(2000);
                                return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                            }
                            message.member.addRole(c).catch(err => {
                                console.log(err);
                                return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                            });
                            message.channel.send(`You have been added to the **${c.name}** role!`).then(m => m.delete(3000));
                            msg.delete();
                            break;
                            case 'F':
                                if (message.member.roles.has(c.id)) {
                                    msg.delete(2000);
                                    return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                                }
                                message.member.addRole(c).catch(err => {
                                    console.log(err);
                                    return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                                });
                                message.channel.send(`You have been added to the **${c.name}** role!`).then(m => m.delete(3000));
                                msg.delete();
                                break;
                                case 'G':
                                    if (message.member.roles.has(c.id)) {
                                        msg.delete(2000);
                                        return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                                    }
                                    message.member.addRole(c).catch(err => {
                                        console.log(err);
                                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                                    });
                                    message.channel.send(`You have been added to the **${c.name}** role!`).then(m => m.delete(3000));
                                    msg.delete();
                                    break;
                                    case 'H':
                                        if (message.member.roles.has(c.id)) {
                                            msg.delete(2000);
                                            return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                                        }
                                        message.member.addRole(c).catch(err => {
                                            console.log(err);
                                            return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                                        });
                                        message.channel.send(`You have been added to the **${c.name}** role!`).then(m => m.delete(3000));
                                        msg.delete();
                                        break;
                                        case 'I':
                                            if (message.member.roles.has(c.id)) {
                                                msg.delete(2000);
                                                return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                                            }
                                            message.member.addRole(c).catch(err => {
                                                console.log(err);
                                                return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                                            });
                                            message.channel.send(`You have been added to the **${c.name}** role!`).then(m => m.delete(3000));
                                            msg.delete();
                                            break;
                                            case 'J':
                                                if (message.member.roles.has(c.id)) {
                                                    msg.delete(2000);
                                                    return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                                                }
                                                message.member.addRole(c).catch(err => {
                                                    console.log(err);
                                                    return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                                                });
                                                message.channel.send(`You have been added to the **${c.name}** role!`).then(m => m.delete(3000));
                                                msg.delete();
                                                break;
                                            
                                                    

            }
        }).catch(collected => {
            return message.channel.send(`I couldn't add you to this role!`);
        });

    });

};

exports.help = {
    name: 'role',
    cooldown: 5,
};