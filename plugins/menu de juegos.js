let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├°๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${name}
├𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 
├𝐝𝐞 𝐦𝐞𝐧ú ͢⃟ᤢ🎮𝐉𝐔𝐄𝐆𝐎𝐒
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
├📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
├📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├͢⃟ᤢ🎮𝐉𝐔𝐄𝐆𝐎𝐒͢⃟ᤢ🎲
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*
├${usedPrefix}ppt *<papel / tijera /piedra>*
├${usedPrefix}prostituto *<nombre / @tag>*
├${usedPrefix}prostituta *<nombre / @tag>*
├${usedPrefix}gay2 *<nombre / @tag>*
├${usedPrefix}lesbiana *<nombre / @tag>*
├${usedPrefix}pajero *<nombre / @tag>*
├${usedPrefix}pajera *<nombre / @tag>*
├${usedPrefix}puto *<nombre / @tag>*
├${usedPrefix}puta *<nombre / @tag>*
├${usedPrefix}manco *<nombre / @tag>*
├${usedPrefix}manca *<nombre / @tag>*
├${usedPrefix}rata *<nombre / @tag>*
├${usedPrefix}love *<nombre / @tag>*
├${usedPrefix}doxear *<nombre / @tag>*
├${usedPrefix}pregunta *<texto>*
├${usedPrefix}simi *<texto>*
├${usedPrefix}topgays
├${usedPrefix}topotakus
├${usedPrefix}formarpareja
├${usedPrefix}verdad
├${usedPrefix}reto
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├【｡｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡｡】
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menujuegos|Menuuegos\?)$/i
handler.fail = null
module.exports = handler
