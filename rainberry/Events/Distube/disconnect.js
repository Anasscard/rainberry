module.exports = async (client, queue) => {
    const embed = client.embed.embed4(client);

    embed.setDescription(`Thank you for using ${client.user.username}!`);
    embed.setImage(client.musicimg);
    queue.textChannel.send({ embeds: [embed] });

}