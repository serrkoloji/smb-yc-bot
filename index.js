const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
const keep_alive = require('./keep_alive.js') //index.js Const Kısımlarına
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa' || msg.content.toLowerCase() === 'selamun aleyküm' || msg.content.toLowerCase() === 'selamun aleykum' || msg.content.toLowerCase() === 'sa bro') {

      var mesajlar = ["Aleyküm Selam","As","Ass","As Hg","As Yiğidim","Ass Adam Adam :heart:"];
      var random_index = Math.floor(Math.random() * mesajlar.length)
      var chosen_message = mesajlar[random_index]
      //mesaj gönderme 
      msg.channel.send(new Discord.RichEmbed()
      .setDescription("Hoşgeldin :heart_eyes:")
      .setImage("https://66.media.tumblr.com/2538c6058c5983d3c736cce422098e96/236c46c96ccc5593-af/s1280x1920/214a407aadd57753c65e2cec5de682a30266eac4.jpg")
      .setColor("RANDOM")
      .setTitle(chosen_message)
      .setAuthor("@"+msg.member.user.username,msg.member.user.displayAvatarURL))

      msg.react("😂")
    setTimeout(function () {
             msg.react("😃")
      },1 * 2000)
  }
  if (msg.content.toLowerCase() === 'ig' || msg.content.toLowerCase() === 'ıg' || msg.content.toLowerCase() === 'iyi geceler' || msg.content.toLowerCase() === 'iyi akşamlar' || msg.content.toLowerCase() === 'iyi aksamlar' || msg.content.toLowerCase() === 'good night') {

      var mesajlar = ["İyi Geceler ","İyi geceler dadlu rüyalar :heart:","ig","Erken değil mi?","Sende Git Beni Yalnız Bırak :cry:"];
      var random_index = Math.floor(Math.random() * mesajlar.length)
      var chosen_message = mesajlar[random_index]
      //mesaj gönderme 
      msg.channel.send(new Discord.RichEmbed()
      .setImage("https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/79239322_179987183060380_3107762119887933421_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=C3Zn8KV1nXYAX_evz8j&oh=a5c5225a5ba6da9130c16477da42e917&oe=5EA4BC32")
      .setColor("RANDOM")
      .setTitle(chosen_message)
      .setAuthor("@"+msg.member.user.username,msg.member.user.displayAvatarURL))

      msg.react("😂")
    setTimeout(function () {
             msg.react("😃")
      },1 * 2000)
  }
  if (msg.content.toLowerCase() === 'gm' || msg.content.toLowerCase() === 'güno' || msg.content.toLowerCase() === 'günaydın' || msg.content.toLowerCase() === 'good morning') {

      var mesajlar = ["Günaydın :heart:"];
      var random_index = Math.floor(Math.random() * mesajlar.length)
      var chosen_message = mesajlar[random_index]
      //mesaj gönderme 
      msg.channel.send(new Discord.RichEmbed()
      .setImage("https://img-s2.onedio.com/id-5553337b6b301fa4309dedbb/rev-0/w-635/f-jpg-webp/s-3ffd4e3c0543afb70f75d272409647dd02d24e85.webp")
      .setColor("RANDOM")
      .setTitle(chosen_message)
      .setAuthor("@"+msg.member.user.username,msg.member.user.displayAvatarURL))

      msg.react("😂")
    setTimeout(function () {
             msg.react("😃")
      },1 * 2000)
  }
  if (msg.content.toLowerCase() === 'seni seviyorum') {

      var mesajlar = ["Sapıklık Yapma :rage:","Hmmmm Gerçekten mi? :neutral_face:","Yavşakkkk :rofl:","Bende Seni Seviyorum. :heart_eyes: :liar:","Kız Mısın Erkek Mi? :grin:","Saol Bende Kendimi Seviyorum :hugging:"];
      var random_index = Math.floor(Math.random() * mesajlar.length)
      var chosen_message = mesajlar[random_index]
      //mesaj gönderme 
      msg.channel.send(new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(chosen_message)
      .setAuthor("@"+msg.member.user.username,msg.member.user.displayAvatarURL))

      msg.react("😂")
    setTimeout(function () {
             msg.react("😃")
      },1 * 2000)
  }
  if (msg.content.toLowerCase() === 'sapık' || msg.content.toLowerCase() === 'spk' || msg.content.toLowerCase() === 'sapik') {

      var mesajlar = ["O Hangi Şerefsiz :triumph:","İltifat Ediyorsunuz Efendim :relieved:","Nude mu istedi? :upside_down:","Ben Sapık Değilim. :cry:"];
      var random_index = Math.floor(Math.random() * mesajlar.length)
      var chosen_message = mesajlar[random_index]
      //mesaj gönderme 
      msg.channel.send(new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(chosen_message)
      .setAuthor("@"+msg.member.user.username,msg.member.user.displayAvatarURL))
  }
  
  //Bot kanalları Kontrl
  if(msg.content.toLowerCase()=== prefix+"kanalolustur"){
      msg.delete();
      let guild = msg.guild
      let modlog = guild.channels.find('name', 'mod-log');
      let hg = guild.channels.find('name', 'hoşgeldiniz');

      if (!modlog){
          msg.delete();
          guild.createChannel("mod-log", 'text');
      };
      if (!hg){
          msg.delete();
          guild.createChannel("hoşgeldiniz", 'text');
      };
    
  }
  //Bot Kanalları Kontrol Sonu
  
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
