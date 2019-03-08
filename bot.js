var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ip
            case 'ip':
                bot.sendMessage({
                    to: channelID,
                    message: 'The ip is MaskHQ.net! Dont forget to tell your Friends :)'
                });
            break;
			case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Commands this bot supports !ip and !website'
                });
            break;
			case 'website':
                bot.sendMessage({
                    to: channelID,
                    message: 'The website is Store.MaskHQ.net!'
                });
            break;
         }
     }
});