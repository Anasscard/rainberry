const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "restart",
    category: "Owner",
    aliases: [],
    description: "",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    owner: true,
    async execute(client, message, args) {
        
        const embed = new MessageEmbed()
            .setColor("BLACK")
            .setDescription(`Restarting bot.`);
        message.channel.send({ embeds: [embed] }).then(message => {
            process.exit();
        });
		
    }
}