module.exports = {
    name: "join",
    category: "Music",
    aliases: [ "j" ],
    description: "Get bots to join your channel.",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "CONNECT", "SPEAK" ],
	owner: false,
    async execute(client, message, args) {
		const embed = message.client.embed.embed2(message);
		const embedError = message.client.embed.error();

        const clientVoice = message.guild.me.voice.channel;
        const memberVoice = message.member.voice.channel;
		
		if (clientVoice) {
			if (clientVoice !== memberVoice) {
				embedError.setDescription(`${message.client.emoji.warn} You must be in the same channel as ${message.client.user}`);
				return message.channel.send({ embeds: [embedError] });
			} else {
				embedError.setDescription(`${message.client.emoji.warn} I'm already on your voice channel`);
				return message.channel.send({ embeds: [embedError] });
			}
		} else {
			if (memberVoice) {
				await message.client.distube.voices.join(memberVoice)
					.then(voice => {
						embed.setDescription(`${message.client.emoji.join} **Join** the voice channel.`);
						message.channel.send({ embeds: [embed] });
					})
					.catch(error => {
						console.log(error);
						embedError.setDescription(`${message.client.emoji.warn} An error occurred while trying to join the voice channel.\nTry using the **Play** command.`);
						return message.channel.send({ embeds: [embedError] });
					})

				
			} else {
				embedError.setDescription(`${message.client.emoji.warn} You must be in a voice channel!`);
				return message.channel.send({ embeds: [embedError] });
			}
		}

    }
}