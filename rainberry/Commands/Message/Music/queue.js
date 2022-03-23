module.exports = {
    name: "queue",
    category: "Music",
    aliases: [ "q" ],
    description: "Show the song queue.",
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

        const arrays = queue.songs.map((song, id) => `**${id + 1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``); 

        embed.setTitle(`${message.client.emoji.queue} Queue:`)
        embed.setFooter({ text: `Request by ${message.author.tag} • ${message.client.music.status(queue)}`, iconURL: message.author.displayAvatarURL() });

        const footer = "songs";
        const timeout = 120000;

        await message.client.pagination.button(message, arrays, embed, footer, timeout);
    }
}