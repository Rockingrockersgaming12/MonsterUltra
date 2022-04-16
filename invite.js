const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE MonsterUltra",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Invite Me`)
    .setDescription(`• [Invite Me](https://discord.com/api/oauth2/authorize?client_id=959412858309971998&permissions=8&scope=bot)`)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `MonsterUltra`,
      client.user.displayAvatarURL(),
      message.delete()
    );
    
    message.channel .send(embed)
    
  
  }
}