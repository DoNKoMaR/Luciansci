let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[βππππβ] πΈπ½πΆππ΄ππ° π΄π» @πππ π³π΄ π»π° πΏπ΄πππΎπ½π° πππ΄ π³π΄ππ΄π΄ π°πΆππ΄πΆπ°π π° π»πΎπ ππππ°ππΈπΎπ πΏππ΄πΌπΈππΌ*`
if (global.prems.includes(who.split`@`[0])) throw '*[βππππβ] π΄π» ππππ°ππΈπΎ πΈπ½πΆππ΄ππ°π³πΎ ππ° π΄π ππππ°ππΈπΎ πΏππ΄πΌπΈππΌ*'
global.prems.push(`${who.split`@`[0]}`)
let textprem = `*[βΠΠΠ€Πβ] @${who.split`@`[0]} Π’ΠΠΠΠ Π¬ ΠΠ« Π ΠΠ ΠΠΠΠ£Π ΠΠΠ‘Π’Π, Π£ ΠΠΠ‘ ΠΠΠ’Π£ Π’ΠΠΠΠ Π¬ ΠΠΠ ΠΠΠΠ§ΠΠΠΠ―*`
m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^Π΄Π°ΡΡΠΏΡΠ΅ΠΌΠΈΡΠΌ$/i
handler.group = true
handler.rowner = true
export default handler
