const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var prefix = ("")

bot.on("ready", async () => {
  console.log(`Lanceur Echo : ${bot.user.username} est allumé sur ${bot.guilds.size} serveurs !`);

  bot.user.setActivity("Développement Nico", {type: "WATCHING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
});

bot.login(process.env.TOKEN);
