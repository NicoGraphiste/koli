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

    if (message.content === prefix + "site")
    message.reply("Il est en développemet désoler");


    if(message.content === prefix + "infodiscord")
        var embed = new Discord.RichEmbed()
        .setDescription("Information du Discord")
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord", message.guild.memberCount)
        .setColor("#F3DB00")
    message.channel.sendEmbed(embed)

    if(message.content === prefix + "help")
        var embed = new Discord.RichEmbed()
        .setTitle("Liste des commandes")
        .setDescription("-^help | Permet de voir la liste des commandes \n -^infodiscord | Permet de voir les infos du discord \n -^avatar | Permet d'afficher votre avatar")
        .addField("Utilisateurs sur le Discord", message.guild.memberCount)
        .setColor("#F3DB00")
    message.channel.sendEmbed(embed)

    if (message.content.startsWith(prefix + "sondage")) {
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join (" ")
        var embed = new Discord.RichEmbed()
            .setDescription("Sondage")
            .addField(thingToEcho, "Répondre avec :heavy_check_mark: ou :x:")
            .setColor("#F3DB00")
        message.guild.channels.find("name", "sondage").sendEmbed(embed)
        .then(function (message) {
            message.react("✔")
            message.react("✖")
        }).catch(function() {
        });

    }

    if(cmd === `${prefix}botinfo`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setTitle("Information du bot")
        .setDescription("Crée par Nico ^w^.")
        .setColor("#F3DB00")
        .setThumbnail(bicon)
        .addField("Nom du Bot", bot.user.username)
        .addField("Crée le", bot.user.createdAt);
    
       return message.channel.send(botembed);
      }
    

})

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue-aurevoir").send(`Un grand Bienvenue à ${member} ;) !`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue-aurevoir").send(`${member} vien de quitter le serveur dommage ;(`)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'membre');
    member.addRole(role)
})
