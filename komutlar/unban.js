const Discord = require('discord.js');
const client = new Discord.Client();

const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
message.delete();
  if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bunun için gerekli iznin yok. Üyeler: '"+prefix+"yardım ' komutunu kullanabilir.");
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`unbans` **adlı komutu özel mesajlarda kullanamazsın.** ')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('`mod-log` kanalı mevcut değil.');
  if (reason.length < 1) return message.reply('**Ban kaldırma sebebini belirtmedin!**');
  if (!user) return message.reply('**Banı kaldırılacak kişinin** **__ID__** **numarasını yazmalısın.**').catch(console.error);
  message.delete();
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban kaldırma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı_id] [sebep]'
};