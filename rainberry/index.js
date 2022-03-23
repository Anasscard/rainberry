const { Client } = require('discord.js');
const config = require(`${process.cwd()}/config.json`);
const delay = require('delay');

const client = new Client({
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: 32767
});

client.prefix = config.Prefix;
client.owner = config.OwnerId;
client.color = config.EmbedColor;
client.musicimg = config.musicimg;
client.delay = delay;

// Utils Handling
client.convert = require(`${process.cwd()}/Utils/convert`);
client.emoji = require(`${process.cwd()}/Utils/emoji`);
client.logger = require(`${process.cwd()}/Utils/logger`);
client.embed = require(`${process.cwd()}/Utils/embed`);
client.pagination = require(`${process.cwd()}/Utils/pagination`);
client.music = require(`${process.cwd()}/Utils/music`);

// Handling
(async () => {
    await require(`${process.cwd()}/Handling/ClientEvent`)(client);
    await require(`${process.cwd()}/Handling/Distube`)(client);
    await require(`${process.cwd()}/Handling/Message`)(client);
})();

// Error Handling
process.on('unhandledRejection', (error, origin) => {
    console.error(error);
});
process.on('uncaughtException', (error, promise) => {
    console.error(error);
});

client.login(config.Token);