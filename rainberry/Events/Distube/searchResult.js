const { MessageEmbed } = require("discord.js");

// If DisTubeOptions.searchSongs = true
module.exports = async (client, message, result, query) => {

    let i = 0
    let thing = new MessageEmbed()
        .setColor(message.client.color)
        .setDescription(`${client.emoji.search} **Choose an option from below**\n${result.map(song => `**${++i}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n")}`)
        .setFooter(`Enter anything else or wait 60 seconds to cancel`);
    message.channel.send({ embeds: [thing] });

}