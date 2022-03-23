const { MessageEmbed } = require("discord.js");

module.exports = {
    embed1: function (message) {
        const embed = new MessageEmbed()
            .setColor(message.client.color)
            .setAuthor({ name: message.client.user.username, iconURL: message.client.user.displayAvatarURL() })
            .setThumbnail(message.client.user.displayAvatarURL())
            .setFooter({ text: `Request by: ${message.author.tag}`, iconURL: message.author.displayAvatarURL() });
        return embed;
    },
    embed2: function (message) {
        const embed = new MessageEmbed()
            .setAuthor({ name: message.client.user.username, iconURL: message.client.user.displayAvatarURL() })
            .setColor(message.client.color)
            .setFooter({ text: `Request by: ${message.author.tag}`, iconURL: message.author.displayAvatarURL() });
        return embed;
    },
    embed3: function (client) {
        const embed = new MessageEmbed()
            .setColor(client.color);
        return embed;
    },
    embed4: function (client) {
        const embed = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setColor(client.color)
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL() })
        return embed;
    },
    error: function () {
        const embed = new MessageEmbed()
            .setColor("RED");
        return embed;
    },
    distube: function (client, user) {
        const embed = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setColor(client.color)
            .setFooter({ text: `Request by: ${user.tag}`, iconURL: user.displayAvatarURL() });
        return embed;
    }
}