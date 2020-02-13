const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("MANAGE_CHANNELS") || !message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
    if (kanal.length < 1) return message.reply('Lütfen Oluşturacağım Kanalın Adını Yaz.!!');
  message.delete();
  guild.createChannel(kanal, 'text');
  message.channel.send("**Yazı Kanalı Oluşturuldu!**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-kanal-aç'],
  permLevel: 3
};

exports.help = {
  name: 'yka',
  description: 'Bir yazı kanalı açar',
  usage: 'yka veya yazı-kanal-aç [açmak istediğiniz kanalın adı]'
};