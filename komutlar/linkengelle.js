const Discord = require('discord.js');
const fs = require('fs');
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));

exports.run = async (client, message) => {
  
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	if(secenekler.length < 1) return message.reply("a� veya kapat yaz!");

  if (secenekler !== "a�" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply("a� veya kapat yaz!")

	if (secenekler === "a�" || secenekler === "on") {
		
      
    
		message.channel.send("��lem Ba�ar�l�: A��k!")
    
  if(!linkEngel[message.guild.id]){
		linkEngel[message.guild.id] = {
			linkEngel: "acik"
		  };
  };

		  fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })
	};

	if (secenekler === "kapat" || secenekler === "off") {
    
               if(!linkEngel[message.guild.id]){
		linkEngel[message.guild.id] = {
			linkEngel: "kapali"
		  };
  };

		fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })

       delete linkEngel[message.guild.id]
       delete linkEngel[message.guild.id].linkEngel

		message.channel.send("��lem Ba�ar�l�: Kapal�!")
    
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['link-engel'],
		permLevel: 3
	  };
	  
	exports.help = {
		name: 'link-engelle',
		description: 'L�nk engelleme sistemini a��p kapatman�z� sa�lar.',
		usage: 'link-engelle <a�/kapat>'
	};