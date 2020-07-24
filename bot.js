// Built-in libraries from Node.JS
const path = require('path');
const fs = require('fs');
// Only import the Client class from Discord.js
const { Client } = require('discord.js');

// Super fancy config loader/validator
const config = (() => {
    // Make sure the config file exists
    if (!fs.existsSync('config.json')) {
        // They must not have copied the config-example.json file yet,
        // so just exit
        console.error('Please copy the config-example.json file and rename it to config.json, filling out all required fields.');
        process.exit(1);
    }

    let json;
    try {
        // Parse the JSON file
        json = JSON.parse(fs.readFileSync('config.json').toString());
    } catch (error) {
        // Catch any parser errors or read errors and exit
        console.error(`Failed to load/parse the config.json file: ${error}`);
        process.exit(1);
    }

    // If there isn't a token, the bot won't start, but if there is then
    // we want to make sure it's a valid bot token
    if (json.token && !/^[a-zA-Z0-9_\.\-]{59}$/.test(json.token)) {
        console.error('The token you entered is invalid! Please carefully re-enter the token and restart the bot.');
        process.exit(1);
    }

    return json;
})();

// Store the commands in a Map (slightly better than a raw object)
const commands = new Map();
// Create the client
const bot = new Client({ disableEveryone: true });

// Store the config and commands on the bot variable so as to make them
// easily accessible in commands and other files
bot.config = config;
bot.commands = commands;

// Read every file in ./commands and filter out the non-JS files
fs.readdirSync(path.resolve(__dirname, 'commands'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading command ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Command is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Command is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load command ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Admin/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Utility ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Admin/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Admin is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Admin is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Admin ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/emojis/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading emojis ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/emojis/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'emojis is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'emojis is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load emojis ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Fivem/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Fivem ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Fivem/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Fivem is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Fivem is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Fivem ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Games/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Games ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Games/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Games is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Games is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Games ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/info/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading info ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/info/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'info is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'info is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load info ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/jokes/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading jokes ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/jokes/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'jokes is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'jokes is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load jokes ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Misc/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Misc ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Misc/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Misc is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Misc is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Misc ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Moderation/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Moderation ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Moderation/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Moderation is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Moderation is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Moderation ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Owner/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Moderation ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Owner/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Owner is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Owner is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Owner ${f}: ${error}`);
        }
    });
    
    fs.readdirSync(path.resolve(__dirname, './commands/Randomstuff/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Randomstuff ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Randomstuff/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Randomstuff is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Randomstuff is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Randomstuff ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Status/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Status ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Status/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Status is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Status is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Status ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/ticket_system/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading ticket_system ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/ticket_system/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'ticket_system is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'ticket_system is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load ticket_system ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Utility/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Utility ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Utility/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Utility is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Utility is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Utility ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Fun/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Fun ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Fun/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Fun is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Fun is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Fun ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/economy/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading economy ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/economy/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'economy is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'economy is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load economy ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/general/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading general ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/general/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'general is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'general is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load general ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/XP/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading XP ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/XP/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'XP is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'XP is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load XP ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Tools/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Tools ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Tools/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Tools is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Tools is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Tools ${f}: ${error}`);
        }
    });

    fs.readdirSync(path.resolve(__dirname, './commands/Setup/'))
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
        // Attempt to load the file
        console.log(`Loading Setup ${f}`);
        try {
            // Require the raw file
            let command = require(`./commands/Setup/${f}`);
            // Validate that there's a run function and a valid help object
            if (typeof command.run !== 'function') {
                throw 'Setup is missing a run function!';
            } else if (!command.help || !command.help.name) {
                throw 'Setup is missing a valid help object!';
            }
            // Store the command in the map based on its name
            commands.set(command.help.name, command);
        } catch (error) {
            // Log any errors from the validator or from requiring the file
            console.error(`Failed to load Setup ${f}: ${error}`);
        }
    });

bot.on('error', console.error);
bot.on("ready", async () => {
    console.log('\x1b[32m%s\x1b[0m', `Dark Gaming is online and set up! I'm on ${bot.guilds.size} servers.`);
    bot.generateInvite([
        'SEND_MESSAGES',
        'MANAGE_MESSAGES',
        // Here are some other common permissions you might want to include:
        // (Complete list can be found at https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS)
        //
        // *** General moderation permissions:
        'KICK_MEMBERS',
        'BAN_MEMBERS',
        // *** Guild settings permissions:
         'MANAGE_CHANNELS',
        'MANAGE_GUILD',
         'MANAGE_NICKNAMES',
         'MANAGE_ROLES',
        // *** Voice permissions:
         'CONNECT',
         'SPEAK',
        // *** Voice moderation permissions:
         'MOVE_MEMBERS',
         'MUTE_MEMBERS',
         'DEAFEN_MEMBERS',
    ]).then(invite => {
        // After generating the invite, log it to the console
        console.log(`Click here to invite the bot to your guild:\n${invite}`);

    // DO NOT EDIT THE BELOW, THIS IS FOR PERFORMANCE AND STATISTICS. EDITING THIS IS A VIOLATION OF LICENSE [START NO EDIT]
    var express = require('express');
    var app = express();
    let webHookUrl = "https://www.google.com"
    let webHookData = `{
        name: "Alex H.",
        purchaseID: "FMMB008",
        mod_module: config["module_toggles"].moderation_commands.toString(),
        utility_module: config["module_toggles"].utility_commands.toString(),
        log_module: config["module_toggles"].logs.toString(),
        mod_log_module: config["module_toggles"].mod_logs.toString(),
        ticket_module: config["module_toggles"].ticket_system.toString(),
        Filter_module: config["module_toggles"].filter_lang_links.toString(),
        bot_prefix: config["bot_setup"].prefix.toString(),
        debug_mode: config["bot_setup"].debug_mode.toString()
    }`
    app.post(webHookUrl, function(req, res) {
        req.type('json');
        req.json(webHookData);
        req.end();
    });
    console.log(`Performance & Statistics Check Made. Status: Complete`)
    // [END NO EDIT]

    });
});



// Message event
bot.afk = new Map();
bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (message.content.includes(message.mentions.users.first())) {
    bot.afk.forEach(key => {
      if (key.id == message.mentions.users.first().id) {
        message.guild.fetchMember(key.id).then(member => {
          let user_tag = member.user.tag;
          return message.channel.send(`**${user_tag}** is currently afk. Reason: ${key.reason}`);
        });
      }
    });

  bot.afk.forEach(key => {
    if (message.author.id == key.id) {
      bot.afk.delete(message.author.id);
      return message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000));
    }
});
}
bot.on('nitroBoost', (booster) => {
    bot.channels.get('724692816210427925').send(`${booster} boosted the server!`)
    booster.addRole(booster.guild.roles.find(a => a.name === 'Nitro Booster'))
 })

});

bot.on('message', message => {
    // Ignore messages from bots and from DMs (non-guild channels)
    if (message.author.bot || !message.guild) {
        return;
    }

    // Just a shorthand variable
    let { content } = message;
    // Ignore any messages that don't start with the configurable prefix
    if (!content.startsWith(config.prefix)) {
        return;
    }

    // Take all the text after the prefix and split it into an array,
    // splitting at every space (so 'hello world' becomes ['hello', 'world'])
    let split = content.substr(config.prefix.length).split(' ');
    // Get the command label (which is the first word after the prefix)
    let label = split[0];
    // Get the rest of the words after the prefix
    let args = split.slice(1);

    // If there's a command with that given label...
    if (commands.get(label)) {
        // ... get the command with that label and run it with the bot, the
        // message variable, and the args as parameters
        commands.get(label).run(bot, message, args);

        
    }
});

// Only run the bot if the token was provided
config.token && bot.login(config.token);
