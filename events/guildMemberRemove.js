module.exports = member => {
  let guild = member.guild;
  member.send('niye ��k�yon amk o�!');
  guild.defaultChannel.sendMessage(`${member.user.username} isimli niye ��kt�n e�lenceyi ka��rd�n`);
};
