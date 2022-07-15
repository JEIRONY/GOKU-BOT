import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: p, dirname, text }) => {
try {
let vn = './media/ven.mp3'
let pp = './media/menus/Menuvid1.mp4'
let package = JSON.parse(await promises.readFile(join(dirname, '../package.json')).catch( => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let uptime = process.uptime() * 1000
let muptime
if (process.send) {
process.send('uptime')
muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(muptime)
let uptime = clockString(uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: package.name,
npmdesc: package.description,
version: package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (, name) => '' + replace[name])
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
conn.sendHydrated(m.chat, str, wm, pp, 'https://www.youtube.com/channel/UCCrEOFYcEqK28CJq7EwB6rg, '𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴', null, null, [
['𒆎⃟⚕️𝑪𝑼𝑬𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺𒆎⃟♦', '/cuentasgb'],
['☙⃝✈️𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫 𝑫𝑬𝑳 𝑩𝑶𝑻☙⃝🚀', '/ping'],
['🍃️⃟⃪͡𝑰𝑵𝑭𝑶𝑮𝑹𝑼𝑷𝑶🍃️⃟⃪͡",', '/infogrupo']
], m,)
await conn.sendFile(m.chat, vn, 'ven.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menujuegos|Menuuegos\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
