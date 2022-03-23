const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "General",
    aliases: [],
    description: "",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    owner: false,
    execute(client, message, args) {
        const embed = new MessageEmbed()
            .setColor(message.client.color)
            .setDescription(`Ping : **${message.client.ws.ping}**ms`);
        message.channel.send({ embeds: [embed] });
    }
}