module.exports = async (client, queue) => {
    const embed = client.embed.error(client);

    embed.setDescription(`${client.emoji.warn} No more song in queue`)
    queue.textChannel.send({ embeds: [embed] });

}