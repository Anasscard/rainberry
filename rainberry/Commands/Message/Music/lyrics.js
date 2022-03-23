const lyricsFinder = require("lyrics-finder");

module.exports = {
    name: "lyrics",
    category: "Music",
    aliases: [ "ly" ],
    description: "Show the lyrics of the song that is currently playing.",
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

        let song = args.join(" ");
		let currentSong = queue.songs[0];
        if (!song && currentSong) song = currentSong.name;

        let lyrics = null;

        try {
            lyrics = await lyricsFinder(song, "");
            if (!lyrics) lyrics = `${message.client.emoji.warn}  No lyrics found.`;
        } catch (error) {
            console.error(error)
            lyrics = `Usage: ${message.client.prefix}ly <Song Name>`;
        }

        embed.setDescription(`**Lyrics** of **${song}**\n${lyrics}`);

        if (embed.description.length >= 2048) embed.description = `${embed.description.substr(0, 2045)}...`;
        
		message.channel.send({ embeds: [embed] })
            .then(m => {
                var total = currentSong.duration * 1000;
                var current = queue.currentTime * 1000;
                let time = total - current;
                setTimeout(() => { m.delete() }, time);
            });
    }
}