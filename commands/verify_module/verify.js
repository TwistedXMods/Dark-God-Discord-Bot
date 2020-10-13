const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");

exports.run = async (bot, message, args) => {
    if (message.channel.id !== botconfig["verify_setup"].verify_channel) {
      // If the channel it wasn't verification channel, ignore it.
      return;
    }
    
    await message.delete();
    await message.member.addRole(botconfig["verify_setup"].verify_role);
  
    // Use this if you want to remove the role from the user.
    await message.member.removeRole(botconfig["join_roles"].role);
    return;
  }
  
  exports.help = {
    name: "verify",
    description: "Verify yourself to make sure you are not a robot."
  }
  
  exports.conf = {
    aliases: [],
    cooldown: 20
  }