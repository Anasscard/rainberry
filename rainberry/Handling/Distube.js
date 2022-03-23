const { readdirSync } = require('fs');
const DisTube = require('distube');
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const config = require(`${process.cwd()}/config.json`);

module.exports = async (client) => {
    const distube = new DisTube.DisTube(client, {
        searchSongs: 0,
        searchCooldown: 30,
        leaveOnEmpty: true,
        emptyCooldown: 0,
        leaveOnFinish: false,
        leaveOnStop: false,
        plugins: [
            new SpotifyPlugin({ 
                parallel: true, 
                emitEventsAfterFetching: true,
                api: { clientId: config.clientId, clientSecret: config.clientSecret }
            }),
            new SoundCloudPlugin()
        ],
        youtubeCookie: config.youtubeCookie,
        youtubeIdentityToken: config.youtubeIdentityToken,
        ytdlOptions: {
            highWaterMark: 1 << 24,
            quality: 'highestaudio'
        },
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        nsfw: true,
        youtubeDL: false,
        updateYouTubeDL: false
    });

    client.distube = distube;

    readdirSync(`${process.cwd()}/Events/Distube/`).forEach(file => {
        const event = require(`${process.cwd()}/Events/Distube/${file}`);
        let eventName = file.split(".")[0];
        client.logger.log(`Loading Distube Events ${eventName}`, "distube");
        client.distube.on(eventName, event.bind(null, client));
    });
}