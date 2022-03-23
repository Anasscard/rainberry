module.exports = async function(client, rateLimitData) {
    client.logger.log(`Client Rate Limit\nTimeout: ${rateLimitData.timeout}Limit: ${rateLimitData.limit}\nMethod: ${rateLimitData.method}\nPath: ${rateLimitData.path}\nRoute: ${rateLimitData.route}\nGlobal: ${rateLimitData.global}`, "warn");
}
