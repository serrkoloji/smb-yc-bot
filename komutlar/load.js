
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  message.delete();
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bunun için gerekli iznin yok. Üyeler: '"+prefix+"yardım ' komutunu kullanabilir.");
    var command = args[0];
    message.delete();
    message.channel.send("`" + command + "` adlı komut yükleniyor...")
      .then(m => {
        client.load(command)
          .then(() => {
            m.edit("`" + command + "` adlı komut başarıyla yüklendi.");
          })
          .catch(e => {
            m.edit(`Komut yüklenirken bir hata oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['l'],
  permLevel: 4
};

exports.help = {
  name: 'load',
  description: 'Yeni eklenen komutu yükler.',
  usage: 'load <komut adı>'
};
