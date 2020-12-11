
//---Bu Kod komutlar klasörüne atılacaktır. 
//###Yapız-CodeArius

const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let sıfırla = db.fetch(`mlog_${message.guild.id}`)

if(args[0] === "sıfırla") {
    if(!sıfırla) {
      message.channel.send(new Discord.RichEmbed()
      .setDescription(`:hayir: | Mod Log Kanalı zaten ayarlı değil.`)
      .setColor("RED"))                     
      return
    }
    
    db.delete(`mlog_${message.guild.id}`)
    message.channel.send(new Discord.RichEmbed()
     .setDescription(`:evet: | Mod Log Kanalı başarıyla sıfırlandı.`)
      .setColor("GREEN"))                   
    return
  }


  
  if (!mlog) {
    return message.channel.send(new Discord.RichEmbed()
     .setDescription(`:hayir: | Mod Log Kanalı etiketlemelisin.`)
    .setColor("RED"))                          
  }
  
  
  
   // message.channel.send(`Otorol \`${rol.name}\`, otorol kanalı ${rolk} olarak ayarlandı.`)
  
  const embed = new Discord.RichEmbed()
        .setDescription(`Mod Log Kanalı başarıyla ${mlog} olarak ayarlandı.\nKanalı sıfırlamak için **.modlog sıfırla** yazabilirsiniz!`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['mod-log', 'modlog', 'setmodlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log-ayarla',
    description: 'mod-log ayarları',
    usage: 'log #'
}