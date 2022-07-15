let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
┆ 【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
┆💗 *¡Hola | Hi!* ${name}
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
┆ *Versión de ${gt}*
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
┆➥ ${vs}
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
┆ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
┆Activo Durante | Active During* 
┆ ${uptime}
┆ *Usuario(s) | Users* 
┆ ${Object.keys(global.db.data.users).length} 
┆ Chat(s) Prohibido(s) | Forbidden Chats*
┆ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┆Usuario(s) Prohibido(s) | Prohibited Urs*
┆ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, '.https://wa.me/573152139466', '.𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
['ⓞ⃟👩‍💻𝑹𝑬𝑮𝑰𝑺𝑻𝑹𝑨𝑹𝑻𝑬ⓞ⃟👩', '.register‍'],
['👩‍💻️⃟⃪͡ꦽ𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫 | 𝑺𝑷𝑬𝑬𝑫✈️️⃟⃪͡ꦽ', '/ping'],
['🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '.menu'],
], m,)}

/*conn.sendHydrated(m.chat, estado, wm, picture, 'https://github', '❍͜͡➣ɢᴏᴋᴜ - ʙᴏᴛ-❍͜͡➣', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m)}*/

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|heyɢᴏᴋᴜ|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
