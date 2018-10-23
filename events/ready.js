const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı.');

    var Games = [

        "%yardım Aktif!!!!!!!",
    
        "%roliste KOMUTU AKTİF!!!!",
        
        `${client.users.size} Kullanıcı Adamsınız`,
        
        `${client.guilds.size} Sunucu Adamsınız`,
        
        `Beni Eklermisin %davet`,



        `Yapımcım RK|BebeMustafa`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "Regular Show Final!");
        }, 2 * 2500);

};
