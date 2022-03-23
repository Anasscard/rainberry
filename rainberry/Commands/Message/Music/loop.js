const { RepeatMode } = require("distube");

module.exports = {
    name: "loop",
    category: "Music",
    aliases: [ "repeat" ],
    description: "Set the repeat mode of the guild queue.",
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

        let repeatMode;

        if (!args[0]) repeatMode = 1;
        if (args[0] && args[0] === "lagu") repeatMode = 1;
        if (args[0] && args[0] === "song") repeatMode = 1;
        if (args[0] && args[0] === "queue") repeatMode = 2;
        if (args[0] && args[0] === "all") repeatMode = 2;
        if (args[0] && args[0] === "off") repeatMode = 0;

        let mode;
        switch(distube.setRepeatMode(message, repeatMode)) {
            case RepeatMode.DISABLED:
                mode = "Off";
                break;
            case RepeatMode.SONG:
                mode = "Repeat a song";
                break;
            case RepeatMode.QUEUE:
                mode = "Repeat all queue";
                break;
        }
        message.channel.send("Set repeat mode to `" + mode + "`");

        embed.setDescription(`${message.client.emoji.loop} Set**Loop** mode to **${mode}**.`);
        message.channel.send({ embeds: [embed] });
    }
}