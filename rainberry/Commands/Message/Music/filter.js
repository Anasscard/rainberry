const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "filter",
    category: "Music",
    aliases: [ "eq", "equalizer" ],
    description: "Enable or disable filter(s) of the queue.",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    owner: false,
    async execute(client, message, args) {
        const embed = message.client.embed.embed2(message);
        const embedError = message.client.embed.error();

        const memberVC = message.member.voice.channel;
        const clientVC = message.guild.me.voice.channel;
        const queue = message.client.distube.getQueue(message);

        if (!memberVC) {
            embedError.setDescription(`${message.client.emoji.warn} You must be in a voice channel!`);
            return message.channel.send({ embeds: [embedError] });
        }
        if (!clientVC) {
            embedError.setDescription(`${message.client.emoji.warn} I'm not on any voice channel!`);
            return message.channel.send({ embeds: [embedError] });
        }
        if (memberVC !== clientVC) {
            embedError.setDescription(`${message.client.emoji.warn} You must be in the same channel as ${message.client.user}!`);
            return message.channel.send({ embeds: [embedError] });
        }
        if (!queue) {
            embedError.setDescription(`${message.client.emoji.warn} There is no music playing.`);
            return message.channel.send({ embeds: [embedError] });
        }

        if (!args[0]) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You didn't provide any arguments, ${message.author}!
Examples: \`${message.client.prefix}filter bassboost\`
Valid filter:\n\`3d\`, \`bassboost\`, \`echo\`, \`flanger\`, \`gate\`, \`haas\`, \`karaoke\`, \`nightcore\`, \`reverse\`, \`vaporwave\`, \`mcompand\`, \`phaser\`, \`tremolo\`, \`surround\`, \`earwax\``);
            message.channel.send({ embeds: [thing] });
        }

        let filter = ['3d', 'bassboost', 'echo', 'flanger', 'gate', 'haas', 'karaoke', 'nightcore', 'reverse', 'vaporwave', 'mcompand', 'phaser', 'tremolo', 'surround', 'earwax'];

        if (filter.includes(args[0])) {
            const filter = message.client.distube.setFilter(message, args[0]);

            embed.setDescription(`${message.client.emoji.filter} Current queue filter: **${filter.join(", ")}**.`);
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === "off") {
            message.client.distube.setFilter(message, false);
    
            embed.setDescription(`${message.client.emoji.filter}  Current queue filter: **Off**.`);
            message.channel.send({ embeds: [embed] });
        } else {
            embedError.setDescription(`Valid filter:\n\`3d\`, \`bassboost\`, \`echo\`, \`flanger\`, \`gate\`, \`haas\`, \`karaoke\`, \`nightcore\`, \`reverse\`, \`vaporwave\`, \`mcompand\`, \`phaser\`, \`tremolo\`, \`surround\`, \`earwax\``);
            message.channel.send({ embeds: [embedError] });
        }
    }
}