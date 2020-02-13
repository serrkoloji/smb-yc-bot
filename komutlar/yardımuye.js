const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription("Tüm Üye Komutları"+" \n "+prefix+'avatarr = Avatarınızı Gösterir.'+" \n "+prefix+'avatarr @kullanıcı = Bahsettiğiniz kişinin avatarını gösterir.'+" \n "+prefix+'emojiyazı [yazı] = Yazığınız yazıyı emojili olarak yollar'+" \n "+prefix+'havadurumu [Mersin] = Yazdığınız şehrin hava durumunu sunar.'+" \n "+prefix+'istatistik = Botun istatistiğini gösterir.'+" \n "+prefix+'kullanıcıbilgim = Komut kullanan kişi hakkında bilgi verir.'+" \n "+prefix+'ping = Botun pingini gösterir.'+" \n "+prefix+'sor = Soru sormaya yarar.'+" \n "+prefix+'sunucubilgi = Sunucu Hakkında Bilgi Verir.');
    message.delete();
    message.channel.sendEmbed(ozelmesajkontrol) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Üye komutlarını gösterir.',
  usage: 'yardım [komut]'
};
