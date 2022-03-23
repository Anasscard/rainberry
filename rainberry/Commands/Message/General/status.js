const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os');
const si = require('systeminformation');

module.exports = {
    name: "status",
    category: "General",
    aliases: [ "stat" ],
    description: "Show status bot",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    owner: false,
    async execute(client, message, args) {
        const versions = await si.versions();
        const time = await si.time();
        const osInfo = await si.osInfo();
        const cpu = await si.cpu();
        const mem = await si.mem();

        const duration2 = moment.duration(time.uptime * 1000).format(" D [days], H [hrs], m [mins], s [secs]");

        const embed = message.client.embed.embed1(message);
        embed.setDescription(`${message.client.emoji.info} **Status**\n
**= STATISTICS =**
> **• Servers** : ${message.client.guilds.cache.size.toLocaleString()}
> **• Channels** : ${message.client.channels.cache.size.toLocaleString()}
> **• Users** : ${message.client.users.cache.size.toLocaleString()}
> **• Discord.js** : v${version}
> **• Node** : v${versions.node}
> **• NPM** : v${versions.npm}
> **• Uptime** : ${duration2}
**= SYSTEM =**
> **• OS Version** : ${os.type} ${osInfo.distro}
> **• OS Release** : ${osInfo.release}
> **• CPU Model** : ${os.cpus()[0].model} 
> **• CPU Cores** : ${cpu.cores} Cores
> **• Total Memory** : ${(mem.total / 1024 / 1024).toFixed(2)} Mbps
> **• Free Memory** : ${(mem.free / 1024 / 1024).toFixed(2)} Mbps
> **• Heap Total** : ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} Mbps
> **• Heap Usage** : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mbps
`);
        message.channel.send({ embeds: [embed] });
    }
}