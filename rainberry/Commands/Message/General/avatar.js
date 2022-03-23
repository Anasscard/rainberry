const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    category: "General",
    aliases: [ "av" ],
    description: "",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    owner: false,
    execute(client, message, args) {
        
        let member = message.mentions.users.first() || message.client.users.cache.get(args[0]);
        if (!member) member = message.member.user;

        const embed = new MessageEmbed()
            .setColor(message.client.color)
            .setDescription(`${member.tag}\n\`ID: ${member.id}\``)
            .setImage(member.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
            .setFooter({ text: `Request by: ${message.author.tag}`, iconURL: message.author.displayAvatarURL() });
        message.channel.send({ embeds: [embed] });

    }
}