import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[โ๐๐๐๐โ] ๐ป๐พ๐ ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐ +๐ท๐พ ๐ด๐๐๐ฐ๐ฝ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ๐ ๐ด๐ฝ ๐ด๐๐๐ด ๐ถ๐๐๐ฟ๐พ, ๐๐ธ ๐ด๐ ๐ฐ๐ณ๐ผ๐ธ๐ฝ ๐ ๐ณ๐ด๐๐ด๐ฐ ๐ฐ๐ฒ๐๐ธ๐๐ฐ๐๐ป๐พ๐ ๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ #enable modohorny*'
let url = packmen[Math.floor(Math.random() * packmen.length)]
conn.sendButton(m.chat, `_๐ฅต Pack 3 ๐ฅต_`, author, url, [['๐ ะกะะะะฃะฎะฉะะฏ ๐', `/${command}`]], m)
}
handler.help = ['pack3']
handler.tags = ['internet']
handler.command = /^(ะฟะฐัะตะฝั)$/i
export default handler

global.packmen = [
  "https://i.imgur.com/TK0qLAu.jpg",
  "https://i.imgur.com/q8lKT40.jpg",
  "https://i.imgur.com/OwWdL9u.jpg",
  "https://i.imgur.com/Er7WiQo.jpg",
  "https://i.imgur.com/u4y0q4P.jpg",
  "https://i.imgur.com/y8y4PPr.jpg",
  "https://i.imgur.com/qgfLlRY.jpg",
  "https://i.imgur.com/irgyUTD.jpg",
  "https://i.imgur.com/uXrqfBl.jpg",
  "https://i.imgur.com/lgXjetf.jpg",
  "https://i.imgur.com/81QLh8s.jpg",
  "https://i.imgur.com/R3AlYe1.jpg",
  "https://i.imgur.com/a2Myr3F.jpg",
  "https://i.imgur.com/Wp9cgGw.jpg",
  "https://i.imgur.com/ggKUnxt.jpg",
  "https://i.imgur.com/eCJNWBl.jpg",
  "https://i.imgur.com/6lcrBQB.jpg",
  "https://i.imgur.com/eSSbXJ1.jpg",
  "https://i.imgur.com/tNyvzyO.jpg"
]
