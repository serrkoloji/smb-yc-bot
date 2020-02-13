const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("MANAGE_CHANNELS") || !message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bunun için gerekli iznin yok. Üyeler: '"+prefix+"yardım ' komutunu kullanabilir.");
    message.delete();
    message.channel.send(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
