let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('[βππππβ] π΄π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ π½πΎ ππΈπ΄π½π΄ π·π°π±πΈπ»πΈππ°π³πΎ π»π°π ππ΄ππππΈπ²π²πΈπΎπ½π΄π (#ππππππ ππππππππ) π²πΎπ½ππ°π²ππ΄ π²πΎπ½ π΄π» πΏπ°ππ° πππ΄ π»πΎ π·π°π±πΈπ»πΈππ΄')
}
return !0
}
