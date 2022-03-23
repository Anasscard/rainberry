module.exports = {
    name: "play",
    category: "Music",
    aliases: [ "p" ],
    description: "Play a song.",
    args: true,
    usage: [ "<YouTube URL>", "<Song Name>", "<Spotify URL>" ],
    examples: [ "Marry You" ],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "CONNECT", "SPEAK" ],
    owner: false,
    async execute(client, message, args) {
        const embedError = message.client.embed.error();

        const memberVC = message.member.voice.channel;
        const clientVC = message.guild.me.voice.channel;

        if (!memberVC) {
            embedError.setDescription(`${message.client.emoji.warn} You must be in a voice channel!`);
            return message.channel.send({ embeds: [embedError] });
        }

        if (clientVC) {
            if (clientVC === memberVC) {
                message.client.distube.play(memberVC, args.join(" "), {
                    member: message.member,
                    textChannel: message.channel,
                    message
                });
            } else {
                embedError.setDescription(`${message.client.emoji.warn} You must be in the same channel as ${message.client.user}`);
                message.channel.send({ embeds: [embedError] });
            }
        } else {
            message.client.distube.play(memberVC, args.join(" "), {
                member: message.member,
                textChannel: message.channel,
                message
            });
        }

    }
}