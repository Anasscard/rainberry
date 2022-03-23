const { MessageEmbed } = require("discord.js");
const _ = require("underscore");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    const hasOwner = message.client.owner.includes(message.member.id);
    const hasRole = message.member.roles.cache.has("942090919899955241");
    const PREFIX = message.client.prefix;
    const embed = message.client.embed.embed1(message);
    const embederror = message.client.embed.error();
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const dyan = "487884601491062785";

    if (message.content.match(new RegExp(`^<@!?${message.client.user.id}>( |)$`))) {
        embed.setDescription(`Hello **${message.author.tag}**, my prefix is **${PREFIX}**.\nUse **${PREFIX}help** to get the list of the commands!`);
        return message.channel.send({ embeds: [embed] });
    }

    if (message.content.match(new RegExp(`^<@!?${message.client.owner[1]}>( |)$`))) {
        message.reply(`Ngopo cok ? ${message.member}`);
    }

    if (message.content.match(new RegExp(`^<@!?${message.client.owner[0]}>( |)$`))) {
        message.reply(` ${message.member}`);
    }

    if (message.content.match(new RegExp(`^<@!?${dyan}>( |)$`))) {
        message.reply(` ? ${message.member}`);
    }

    if (message.guild.id === "") {
        if (!hasRole && !hasOwner) return;
    }

    if (message.content == '') {
        message.channel.send('') ;
    }
    if (message.content == '') {
        message.channel.send('') ;
    }
    if (message.content == '') {
        message.channel.send('');
    }
    if (message.content == `${PREFIX}ban`) {
        message.channel.send("");
    }

    const prefixRegex = new RegExp(`^(<@!?${message.client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [ matchedPrefix ] = message.content.match(prefixRegex);

    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    const command = message.client.commands.get(commandName) ||
        message.client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\n\nExamples:`;
            command.usage.forEach(usage => {
                reply += `\n${PREFIX}${command.name} ${usage}`;
            });
        }

        embederror.setDescription(reply);
        return message.channel.send({ embeds: [embederror] });
    }

    if (command.memberPermissions && !message.member.permissions.has(command.memberPermissions)) {
        embederror.setDescription("You don't have permission to run this command.");
        return message.channel.send({ embeds: [embederror] });
    }

    if (command.botPermissions && !message.guild.me.permissions.has(command.botPermissions)) {
        embederror.setDescription("I don't have permission to run this command.");
        return message.channel.send({ embeds: [embederror] });
    }

    if (command.owner && !hasOwner) return;

    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.client.logger.log(`Error Execute Commands at ${command.name} | ` + error, "error");
        embederror.setDescription(`${message.client.emoji.warn} There was an error executing that command.\nI have contacted the owner of the bot to fix it immediately.`);
        message.channel.send({ embeds: [embederror] });
        let owner = message.client.users.cache.get(client.owner[0]);
        owner.send({ content: `${message.client.emoji.warn} There was an error executing command **${command.name}**.\nAn error encountered: \n${error}\n<#${message.channel.id}>` });
    }
};