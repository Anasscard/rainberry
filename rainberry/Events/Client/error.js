module.exports = async function(client, error) {
    client.logger.log(`Client Error\nName: ${error.name}\nMessage: ${error.message}`, "error");
    console.error(error);
}