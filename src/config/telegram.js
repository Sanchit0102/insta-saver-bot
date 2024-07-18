const TelegramBot = require("node-telegram-bot-api");

const token = "7491863909:AAG6k3Jgjn4EnvjRdVGe2rcHM9Jw_i686HE";

const Bot = new TelegramBot(token, { polling: true });

module.exports = { Bot };
