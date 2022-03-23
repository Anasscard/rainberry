module.exports = async (client, queue, song) => {
    const embed = client.embed.distube(client, song.user);

    embed.setDescription(`${client.emoji.addsong} Add Song \n[${song.name}](${song.url}) - \`[${song.formattedDuration}]\``);
    embed.setThumbnail(song.thumbnail);
    queue.textChannel.send({ embeds: [embed] });

}