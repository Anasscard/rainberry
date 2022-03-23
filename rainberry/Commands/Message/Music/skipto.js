module.exports = {
    name: "skipto",
    category: "Music",
    aliases: [ "jump" ],
    description: "Skips some of the currently playing songs.",
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

        if (isNaN(args[0])) {
            embedError.setDescription(`${message.client.emoji.warn} Please enter a valid number!`);
            return message.channel.send({ embeds: [embedError] });
        }

        message.client.distube.jump(message, parseInt(args[0]));
        embed.setDescription(`${message.client.emoji.skipto} **Skip** ${args[0]} songs.`);
        message.channel.send({ embeds: [embed] });
    }
}