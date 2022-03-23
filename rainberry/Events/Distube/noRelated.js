module.exports = async (client, queue) => {
    const embed = client.embed.error(client);

    embed.setDescription(`${client.emoji.warn} Can't find related video to play. Stop playing music.`)
    queue.textChannel.send({ embeds: [embed] });

}