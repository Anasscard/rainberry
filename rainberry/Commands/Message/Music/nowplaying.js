module.exports = {
    name: "nowplaying",
    category: "Music",
    aliases: [ "np" ],
    description: "Show the currently playing song.",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    owner: false,
    async execute(client, message, args) {
        const embed = message.client.embed.embed2(message);
        const embedError = message.client.embed.error();

        const clientVC = message.guild.me.voice.channel;
        const queue = message.client.distube.getQueue(message);

        if (!clientVC) {
            embedError.setDescription(`${message.client.emoji.warn} I'm not on any voice channel!`);
            return message.channel.send({ embeds: [embedError] });
        }
        if (!queue) {
            embedError.setDescription(`${message.client.emoji.warn} There is no music playing.`);
            return message.channel.send({ embeds: [embedError] });
        }

        const currentSong = queue.songs[0];

        // Progress Bar
        const total = currentSong.duration * 1000;
        const current = queue.currentTime * 1000;
        const size = 30;
        const line = '─';
        const slider = message.client.emoji.note;

        embed.setDescription(`${message.client.emoji.music} **Now Playing**\n[${currentSong.name}](${currentSong.url}) - \`[${currentSong.formattedDuration}]\``)
        embed.setThumbnail(currentSong.thumbnail)
        embed.addField("\u200b", message.client.music.progressbar(total, current, size, line, slider))
        embed.addField("\u200b", `\`${message.client.convert.convertTime(current)} / ${message.client.convert.convertTime(total)}\``)
        embed.setFooter({ text: `Request by ${message.author.tag} • ${message.client.music.status(queue)}`, iconURL: message.author.displayAvatarURL() });
        message.channel.send({ embeds: [embed] });

    }
}