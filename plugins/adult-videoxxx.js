let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[โ๐๐๐๐โ] ๐ป๐พ๐ ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐ +๐ท๐พ ๐ด๐๐๐ฐ๐ฝ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ๐ ๐ด๐ฝ ๐ด๐๐๐ด ๐ถ๐๐๐ฟ๐พ, ๐๐ธ ๐ด๐ ๐ฐ๐ณ๐ผ๐ธ๐ฝ ๐ ๐ณ๐ด๐๐ด๐ฐ ๐ฐ๐ฒ๐๐ธ๐๐ฐ๐๐ป๐พ๐ ๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ #enable modohorny*'   
let res = pickRandom(asupan)
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['๐ ะกะะะะฃะฎะฉะะฏ ๐', `/${command}`]], m)}
handler.help = ['videoxxx']
handler.tags = ['random']
handler.command = /^ะฟะพัะฝะพ|vรญdeoxxx$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const asupan = [
"https://cdn2.embed-player.space/21/11/16/1098605.mp4",
"https://hot0.semyana.website/cached/828379.mp4",
"https://hot.embed-player.space/cached/1096462.mp4",
"https://cdn2.embed-player.space/19/09/26/736731.mp4",
"https://cdn.embed-player.space/15/07/14/Dtr9iHiemU.mp4",
]
