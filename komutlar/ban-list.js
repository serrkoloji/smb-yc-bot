const croxy = require("croxy-api")
const Discord = require("discord.js")
const client = new Discord.Client();

const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;


exports.run = async function(client,message,args) {
  message.delete();
if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bunun için gerekli iznin yok. Üyeler: '"+prefix+"yardım ' komutunu kullanabilir.");
	let guild = message.guild
  let modlog = guild.channels.find('name', 'mod-log');
  
  if (!modlog){
    guild.createChannel("mod-log", 'text');
  };

	message.guild.fetchBans()
	  .then(banned => {
	    let list = banned.map(user => user.tag+" - "+user.id).join('\n');

	    // Make sure if the list is too long to fit in one message, you cut it off appropriately.
	    if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
      
      message.delete();
	    guild.channels.get(modlog.id).send(`**${banned.size} Kullanıcı Banlı:**\n${list}`)
	  })
	  .catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban-list',
  description: 'Ban Listesini Görüntüler',
  usage: 'ban-list'
};