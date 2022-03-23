module.exports = {
    name: "volume",
    category: "Music",
    aliases: [ "v" ],
    description: "Change or check the volume.",
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

        let volume = parseInt(args[0]);

        if (!volume) {
            embed.setDescription(`${message.client.emoji.volume} Current **volume** : \`${queue.volume}\`%`);
            return message.channel.send({ embeds: [embed] });
        }

        if (isNaN(volume)) {
            embedError.setDescription(`${message.client.emoji.warn} Please enter a valid number!`);
            return message.channel.send({ embeds: [embedError] });
        }

        if (volume < 0)  volume = 0;
        if (volume > 100) volume = 100;

        message.client.distube.setVolume(message, volume);

        embed.setDescription(`${message.client.emoji.volume} **Volume** set to \`${volume}\`%`);
        message.channel.send({ embeds: [embed] });

    }
}