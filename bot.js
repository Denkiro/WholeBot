const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjA3NDc4Mzk5NTgxMjkwNDk2.XU2_0w.SSwWhLGgmbFHQSisBsgX4VRYl7M);//BOT_TOKEN is the Client Secret
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
}

        args = args.splice(1);
        switch(cmd) {
            // !mostupvote
            case 'mostupvote':
                bot.sendMessage({
                    to: channelID,
                    message: 'Here is the most upvoted image from r/eyebleach! https://i.imgur.com/lkGjLqp.gifv'
                });
            break;
            
         }
     }
});
