const Discord = require('discord.js');
module.exports = member => {
  member.sendMessage("Sunucumuza Hoşgeldin :heart_eyes:")//Sunucuya Yeni Biri Geldiğinde Mesaj Atar istediğini yaz.

  const channel = member.guild.channels.find('name', 'hoşgeldiniz');// 'gelen-giden' log ismidir. değiştirebilirsiniz. belirttiğiniz isme giriş çıkış gösterecektir.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('0x00cc44')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(`:inbox_tray: ${member.user.username} Sunucuya katıldı. Bi Hoşgeldin Diyin Bakim.`)
  .setTimestamp()
  channel.sendEmbed(embed);
};