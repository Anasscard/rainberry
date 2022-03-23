const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    category: "General",
    aliases: [ "h" ],
    description: "",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    owner: false,
    async execute(client, message, args) {
        const embed = new MessageEmbed()
            .setColor(message.client.color)
            .setThumbnail(message.client.user.displayAvatarURL())
            .setFooter({ text: `Request by: ${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
            .setDescription(`${message.client.emoji.info} **Daftar Command**\n
${message.client.emoji.folderinfo} **General Command**
\`avatar\`, \`hack\`, \`help\`, \`ping\`, \`say\`, \`status\`

${message.client.emoji.foldermusic} **Music Command**
\`autoplay\`, \`filter\`, \`join\`, \`leave\`, \`loop\`, \`lyrics\`, \`nowplaying\`, \`pause\`, \`play\`, \`previous\`, \`queue\`, \`resume\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\`
`);
        message.channel.send({ embeds: [embed] });
    }
};