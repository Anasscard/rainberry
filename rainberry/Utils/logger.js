const chalk = require("chalk");
const moment = require("moment");

module.exports = class Logger {
	static log (content, type = "info") {
		const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;
		switch (type) {
		// Check the message type and then print him in the console
		case "info": {
			return console.log(`${chalk.hex('#000000').bgHex('#00FF00')(` | INFORMATION ${chalk.hex('#000000').bgHex('#808080')(`[${date}]`)} `)} ${chalk.hex('#00FF00')(content)}`);
		}
		case "warn": {
			return console.log(`${chalk.hex('#000000').bgHex('#ffa500')(` | WARNING     ${chalk.hex('#000000').bgHex('#808080')(`[${date}]`)} `)} ${chalk.hex('#ffa500')(content)}`);
		}
		case "error": {
			return console.log(`${chalk.hex('#000000').bgHex('#FF0000')(` | ERROR       ${chalk.hex('#000000').bgHex('#808080')(`[${date}]`)} `)} ${chalk.hex('#FF0000')(content)}`);
		}
		case "debug": {
			return console.log(`${chalk.hex('#000000').bgHex('#00FFFF')(` | DEBUG       ${chalk.hex('#000000').bgHex('#808080')(`[${date}]`)} `)} ${chalk.hex('#00FFFF')(content)}`);
		}
		case "slash": {
			return console.log(`${chalk.hex('#000000').bgHex('#FF00FF')(` | COMMANDS    ${chalk.hex('#000000').bgHex('#808080')(`[${date}]`)} `)} ${chalk.hex('#FF00FF')(content)}`);
		}
		case "cmd": {
			return console.log(`${chalk.hex('#000000').bgHex('#800080')(` | COMMANDS    ${chalk.hex('#000000').bgHex('#808080')(`[${date}]`)} `)} ${chalk.hex('#800080')(content)}`);
		}
		case "event": {
			return console.log(`${chalk.hex('#000000').bgHex('#808000')(` | EVENTS      ${chalk.hex('#000000').bgHex('#808080')(`[${date}]`)} `)} ${chalk.hex('#808000')(content)}`);
		}
		case "distube": {
			return console.log(`${chalk.hex('#000000').bgHex('#008000')(` | EVENTS      ${chalk.hex('#000000').bgHex('#808080')(`[${date}]`)} `)} ${chalk.hex('#008000')(content)}`);
		}
		case "ready": {
			return console.log(`${chalk.hex('#000000').bgHex('#0000FF')(` | READY       ${chalk.hex('#000000').bgHex('#808080')(`[${date}]`)} `)} ${chalk.hex('#0000FF')(content)}`);
		} 
		default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
		}
	}
};