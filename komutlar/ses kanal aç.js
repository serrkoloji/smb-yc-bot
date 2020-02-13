const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
  message.delete();
    if (!message.member.hasPermission("MANAGE_CHANNELS") || !message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
  message.delete();
  guild.createChannel(kanal, 'voice');
  message.delete();
  message.channel.send("Ses Kanalı Oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ses-kanal-aç'],
  permLevel: 3
};

exports.help = {
  name: 'ska',
  description: 'Bir ses kanalı açar',
  usage: 'ska veya ses-kanal-aç [açmak istediğiniz kanalın adı]'
};