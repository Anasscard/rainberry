module.exports = async (client, queue) => {
    const embed = client.embed.error(client);

    embed.setDescription(`${client.emoji.warn} Channel is empty.`);
    queue.textChannel.send({ embeds: [embed] });

}