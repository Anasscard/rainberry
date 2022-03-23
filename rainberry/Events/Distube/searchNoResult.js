module.exports = async (client, message, query) => {
    const embed = client.embed.error(client);

    embed.setDescription(`${client.emoji.warn} No result found for ${query}!`)
    message.channel.send({ embeds: [embed] });

}