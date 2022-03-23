module.exports = async (client, channel, err) => {
    const embed = client.embed.error(client);

    console.log(err);

    embed.setDescription(`${client.emoji.warn} An error encountered: \n${err}`);
    channel.send({ embeds: [embed] });

    const owner = client.users.cache.get(client.owner[0]);
    owner.send({ embeds: [embed] });

}