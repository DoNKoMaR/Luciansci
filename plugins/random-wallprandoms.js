/*---------------------------------------------------------------------------------------
  ð â¢ By https://github.com/ALBERTO9883
  ð â¢ âAlberto Y Ashlyâ
  ð â¢ https://github.com/ALBERTO9883/NyanCatBot-MD
-----------------------------------------------------------------------------------------*/

import axios from "axios"
let handler = async (m, {command, conn}) => {
let fgif = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`ï¸u`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `ð§¿ âÐÑÑÐ¸Ð°Ð½ - ð±ððâ- ð±ðð ð®`, 'jpegThumbnail': false }}}
let apikey = keysxxx
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName[who]
if (command == 'ÑÑÑ') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/mountain?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'pubg') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/pubg?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'wpgaming') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/gaming?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'wpaesthetic') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/wallhp?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'wprandom') {
let res = await axios("https://meme-api.herokuapp.com/gimme/wallpaper")
await conn.reply(m.chat, global.wait, m)
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, url, [['Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾ð', `/bot gracias`]], fgif, { mentions: [who] })}
if (command == 'ÐºÐ¾ÑÐµ') {
let haha = await conn.getFile(`https://coffee.alexflipnote.dev/random`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'pentol') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/pentol?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'caricatura') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/kartun?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'ciberespacio') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/cyberspace?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'technology') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/teknologi?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'doraemon') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/doraemon?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'hacker') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/hekel?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'planeta') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/tatasurya?apikey=APIKEY`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'Ð¿ÑÐ¾ÑÐ¸Ð»Ð¸') {
let haha = await conn.getFile(`https://zenzapis.xyz/randomimage/profil?apikey=${apikey}`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'Ð¾Ð±Ð¾Ð¸2') {
let haha = await conn.getFile(`https://zenzapis.xyz/randomimage/aesthetic?apikey=${apikey}`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'Ð¼Ð°ÑÐ¸Ð½Ñ') {
let haha = await conn.getFile(`https://zenzapis.xyz/randomimage/mobil?apikey=${apikey}`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'Ð¾Ð±Ð¾Ð¸') {
let haha = await conn.getFile(`https://zenzapis.xyz/randomimage/wallhp?apikey=${apikey}`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
if (command == 'Ð¼Ð¾ÑÐ¾ÑÑÐºÐ»Ñ') {
let haha = await conn.getFile(`https://zenzapis.xyz/randomimage/motor?apikey=${apikey}`)
await conn.reply(m.chat, global.wait, m)
conn.sendButton(m.chat, `_${command}_`.trim(), `*ââ¢@${who.split("@s.whatsapp.net")[0]}*`, haha.data, [['ð Ð¡ÐÐÐÐ£Ð®Ð©ÐÐ¯ ð', `/${command}`]], fgif, { mentions: [who] })}
}
handler.command = ['Ð¾Ð±Ð¾Ð¸', 'Ð¼Ð¾ÑÐ¾ÑÑÐºÐ»Ñ', 'Ð¼Ð°ÑÐ¸Ð½Ñ', 'Ð¾Ð±Ð¾Ð¸2', 'ÐºÐ¾ÑÐµ', 'Ð¿ÑÐ¾ÑÐ¸Ð»Ð¸', 'caricatura', 'ciberespacio', 'technology', 'doraemon', 'hacker', 'planeta', 'randomprofile', 'wpaesthetic2', 'wpvehiculo', 'wallhp', 'wpmoto']
export default handler
