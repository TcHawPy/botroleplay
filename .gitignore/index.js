const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.login('NjEzMzY2Mjg2NjA0NDM1NDU3.XVz2_A.M1T1F5llnlZaTLqBvVzaHEzeQlk');

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('612708507807907852').send("" + member.user + ", viens juste de passer les contrôles de sécurités et d'arriver en ville ! :airplane_arriving:");
    console.log('+1')
})

client.on('guildMemberAdd', member =>{
    member.createDM().then(function (channel) {
        channel.send("Bienvenue à toi "+ member.user +" sur **Une Autre Vie | Roleplay**. Comme tu dois le savoir, nous sommes un serveur Serious Roleplay sur Garry's Mod. Nous te souhaitons la bienvenue sur notre communauté. Sur notre discord, tu trouveras toutes les informations nécessaires pour rejoindre la communauté sans encombre.")
        channel.send(""+ member.user +" N'oublie pas d'aller valider le règlement sur le discord pour avoir accès à l'ensemble du contenu. Pour finir, dirige-toi impérativement sur le **forum** pour t'assurer d'être assez renseigné sur notre serveur.")
        channel.send(""+ member.user +" Je te passe quelques liens qui pourront t'être utile dans le futur : https://steamcommunity.com/groups/uneautrevie-rp http://www.uneautrevie-rp.fr/")
        channel.send("Profite et amuse-toi bien !:wink:")
    })
    
})

client.on('ready', function () {
    client.user.setGame('Une Autre Vie | Roleplay');
})
