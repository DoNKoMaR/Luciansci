let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
let textprem = `*γ ππππππππ πππππππ γ*
` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
m.reply(textprem, null, {mentions: conn.parseMention(textprem)})
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(Π»ΠΈΡΡΠΏΡΠ΅ΠΌΠΈΡΠΌ|premlist)$/i
handler.rowner = true
export default handler
