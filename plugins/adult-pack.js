import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[โ๐๐๐๐โ] ๐ป๐พ๐ ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐ +๐ท๐พ ๐ด๐๐๐ฐ๐ฝ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ๐ ๐ด๐ฝ ๐ด๐๐๐ด ๐ถ๐๐๐ฟ๐พ, ๐๐ธ ๐ด๐ ๐ฐ๐ณ๐ผ๐ธ๐ฝ ๐ ๐ณ๐ด๐๐ด๐ฐ ๐ฐ๐ฒ๐๐ธ๐๐ฐ๐๐ป๐พ๐ ๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ #enable modohorny*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_๐ฅต Pack ๐ฅต_`, author, url, [['๐ ะกะะะะฃะฎะฉะะฏ ๐', `/${command}`]], m)
}
handler.help = ['pack']
handler.tags = ['internet']
handler.command = /^(ะดะตะฒััะบะฐ)$/i
export default handler

global.pack = [
  "https://i.imgur.com/XbW7FO2.jpg",
  "https://i.imgur.com/ciuzM98.jpg",
  "https://i.imgur.com/uHsrrrx.jpg",
  "https://i.imgur.com/PVi8YDi.jpg",
  "https://i.imgur.com/FLC3ZXE.jpg",
  "https://i.imgur.com/54m52tX.jpg",
  "https://i.imgur.com/OsxYPgQ.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/zdHVFEI.jpg",
  "https://i.imgur.com/kAplnSG.jpg",
  "https://i.imgur.com/15UiO8o.jpg",
  "https://i.imgur.com/qjjyr6G.jpg",
  "https://i.imgur.com/bQZRhBU.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/0MhmmF4.jpg",
  "https://i.imgur.com/2MX4wvq.jpg",
  "https://i.imgur.com/HYL5ggu.jpg",
  "https://i.imgur.com/7ZjOD2a.jpg",
  "https://i.imgur.com/zbEUy3m.jpg",
  "https://i.imgur.com/tZ6vlg6.jpg",
  "https://i.imgur.com/jdPns8O.jpg",
  "https://i.imgur.com/VyjBQHT.jpg",
  "https://i.imgur.com/ozAGqBD.jpg",
  "https://i.imgur.com/DsSj9S1.jpg",
  "https://i.imgur.com/KYHpjNc.jpg",
]
