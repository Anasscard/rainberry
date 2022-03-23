module.exports = async (client) => {

    //If the bot is ready it sends a message in the console
    console.log(`${client.user.username} Sudah online!`);
    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    //Game
    let statuses = ['neither your average nor typical', `Prefix : ${client.prefix}`, ` I Owner Constantine2022`];
    setInterval(function() {
        let status = statuses[Math.floor(Math.random()*statuses.length)];
        client.user.setActivity(status, {type: "PLAYING"});
    }, 10000)

}