module.exports = async (client, queue, playlist) => {
    const embed = client.embed.distube(client, playlist.user);

    embed.setDescription(`${client.emoji.playlist} Add Playlist \n[${playlist.name}](${playlist.url}) \nTotal : ${playlist.songs.length} songs \`[${playlist.formattedDuration}]\``);
    embed.setThumbnail(playlist.thumbnail);
    queue.textChannel.send({ embeds: [embed] });

}