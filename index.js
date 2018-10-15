const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("^")

bot.on('ready', function() {
    bot.user.setGame("By Nico | ^help");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "avatar")
    message.reply(message.author.avatarURL);

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});
