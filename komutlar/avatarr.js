const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("00ff00")
        .setTitle("Avatar")
        .setFooter("Aratan Kişi " + message.author.tag)
        .setDescription("[Avatar URL Link]("+mentionedUser.displayAvatarURL+")");
        message.delete();
        message.channel.send(embed)


    msg.delete();
}

exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: ['avatarr', 'avt']

}

module.exports.help = {
  name: "avatarr",
  description: "Sizin Yada Belirttiğiniz Kişinin Avatarını Gösterir",
  usage: "avatarr veya !!avt. Başkası İçin: !!avatarr @kullanıcı veya !!avt @kullanıcı. "
}