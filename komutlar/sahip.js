const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;



module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("MANAGE_CHANNELS") || !message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bunun için gerekli iznin yok. Üyeler: '"+prefix+"yardım ' komutunu kullanabilir.");
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Sahip komutları**")
    .setColor("#15f153")
    .addField(prefix+"eval", "Kod dener")
    .addField(prefix+"oad", "Yeni bir komut yükler")
    .addField(prefix+"reboot", "Botu yeniden başlatır")
    .addField(prefix+"reload", "Bir komutu yeniden başlatır")
    .addField(prefix+"unload", "Bir komutu devre dışı bırakır")
    
    message.delete();
    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};
