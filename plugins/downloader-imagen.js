import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[โ๐๐๐๐โ] ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ ๐ณ๐ด ๐๐๐พ ๐ณ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `๐ *๐๐ด๐๐๐ป๐๐ฐ๐ณ๐พ ๐ณ๐ด:* ${text}
๐ *๐ฑ๐๐ฒ๐ฐ๐ณ๐พ๐:* Google
`, author, link, link, '๐ ๐๐๐ป', null, null, [
['๐ ะกะะะะฃะฎะฉะะฏ ๐', `/imagen ${text}`]
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler
