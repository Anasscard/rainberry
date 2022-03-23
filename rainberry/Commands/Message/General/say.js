const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    category: "General",
    aliases: [],
    description: "",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    owner: false,
    async execute(client, message, args) {

        let arg = args.join(" ")

        await message.delete();

        message.channel.send(arg);

    }
}