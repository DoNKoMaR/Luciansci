let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*๐ท๐พ๐ป๐ฐ ๐๐๐๐ฐ๐๐ธ๐พ ๐๐ป, ๐๐ด ๐ธ๐ฝ๐๐ธ๐๐พ ๐ฐ ๐๐ฝ๐ธ๐๐๐ด ๐ฐ ๐ป๐พ๐ ๐ถ๐๐๐ฟ๐พ๐ ๐พ๐ต๐ธ๐ฒ๐ธ๐ฐ๐ป๐ด๐ ๐ณ๐ด ๐๐ท๐ด ๐๐ท๐ฐ๐ณ๐พ๐ ๐ฑ๐๐พ๐บ๐ด๐๐ - ๐๐ด๐ฐ๐ผ ๐ฟ๐ฐ๐๐ฐ ๐ฒ๐พ๐ฝ๐๐ธ๐๐ธ๐ ๐ฒ๐พ๐ฝ ๐ป๐ฐ ๐ฒ๐พ๐ผ๐๐ฝ๐ธ๐ณ๐ฐ๐ณ :D*

*โค ๐ถ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐ ๐ฑ๐๐:*
*1.-* https://chat.whatsapp.com

*2.-* https://chat.whatsapp.com

*3.-* https://chat.whatsapp.com

*4.-* https://chat.whatsapp.com

*5.-* https://chat.whatsapp.com

*6.-* https://chat.whatsapp.com

*7.-* https://chat.whatsapp.com

*8.-* https://chat.whatsapp.com

*9.-* https://chat.whatsapp.com

*10.-* https://chat.whatsapp.com
`.trim(), wm, media, [['ะะะะฎ', '#menu']], m)
handler.command = /^ะกะกะซะะะะะกะะะะะฏ$/i
export default handler
