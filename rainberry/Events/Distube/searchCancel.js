module.exports = async (client, message, query) => {
    const embed = client.embed.error(client);

    embed.setDescription(`${client.emoji.warn} Searching canceled!`)
    message.channel.send({ embeds: [embed] });

}