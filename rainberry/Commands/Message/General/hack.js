const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hack",
    category: "General",
    aliases: [],
    description: "",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    owner: false,
    execute(client, message, args) {
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const embed = new MessageEmbed()
            .setColor(message.client.color);

        embed.setDescription(`<a:loading:780226997330640916> Hacking ${member.user.tag} now...`);
        message.channel.send({ embeds: [embed] })
        .then(msg => {
            setTimeout(() => { 
                embed.setDescription(`<a:loading:780226997330640916> Finding discord login...`);
                msg.edit({ embeds: [embed] })
                .then(msg => {
                    setTimeout(() => { 
                        embed.setDescription(`<a:loading:780226997330640916> Found:\n**Email**: \`******@*****.***\`\n**Password**: \`*******\``);
                        msg.edit({ embeds: [embed] })
                        .then(msg => {
                            setTimeout(() => { 
                                embed.setDescription(`<a:loading:780226997330640916> Fetching dms...`);
                                msg.edit({ embeds: [embed] })
                                .then(msg => {
                                    setTimeout(() => { 
                                        embed.setDescription(`<a:loading:780226997330640916> Listing most common words...`);
                                        msg.edit({ embeds: [embed] })
                                        .then(msg => {
                                            setTimeout(() => { 
                                                embed.setDescription(`<a:loading:780226997330640916> Injecting virus into discriminator #${member.user.discriminator}`);
                                                msg.edit({ embeds: [embed] })
                                                .then(msg => {
                                                    setTimeout(() => { 
                                                        embed.setDescription(`<a:loading:780226997330640916> Virus injected.`);
                                                        msg.edit({ embeds: [embed] })
                                                        .then(msg => {
                                                            setTimeout(() => { 
                                                                embed.setDescription(`<a:loading:780226997330640916> Finding IP address...`);
                                                                msg.edit({ embeds: [embed] })
                                                                .then(msg => {
                                                                    setTimeout(() => { 
                                                                        embed.setDescription(`<a:loading:780226997330640916> Spamming email...`);
                                                                        msg.edit({ embeds: [embed] })
                                                                        .then(msg => {
                                                                            setTimeout(() => { 
                                                                                embed.setDescription(`<a:loading:780226997330640916> Selling data to facebook...`);
                                                                                msg.edit({ embeds: [embed] })
                                                                                .then(msg => {
                                                                                    setTimeout(() => { 
                                                                                        embed.setDescription(`<a:loading:780226997330640916> Finished hacking ${member.user.tag}`);
                                                                                        msg.edit({ embeds: [embed] })
                                                                                        .then(msg => {
                                                                                            setTimeout(() => { 
                                                                                                embed.setDescription(`The hack is complete.`);
                                                                                                msg.edit({ embeds: [embed] })
                                                                                            }, 9000);
                                                                                        })
                                                                                    }, 9000);
                                                                                })
                                                                            }, 7000);
                                                                        })
                                                                    }, 7000);
                                                                })
                                                            }, 7000);
                                                        })
                                                    }, 7000);
                                                })
                                            }, 7000);
                                        })
                                    }, 7000);
                                })
                            }, 7000);
                        })
                    }, 5000); 
                })
            }, 7000);
        })

    }
}