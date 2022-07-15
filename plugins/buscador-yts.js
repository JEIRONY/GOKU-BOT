import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝘾𝘼𝙉𝘼𝙇 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀\n\n𝙒𝙍𝙄𝙏𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊 𝙊𝙍 𝘾𝙃𝘼𝙉𝙉𝙀𝙇`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ
┆【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ
┆✨ *${v.title}* 
┆🎈 (${v.url})
┆⏳ *Duración:* ${v.durationH}
┆🗓 *Fecha:* de subida: ${v.durationH}
┆👀 *Vistas:* ${v.view} 
╰─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ
      `.trim()
      case 'channel': return `
╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ
┆【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─
┆✨ *${v.channelName}* 
(${v.url})
┆👥 *Subscriptores:* ${v.subscriberH} 
┆🎥 *Videos:* ${v.videoCount}  
╰─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ
`.trim()
    }
  }).filter(v => v).join('\n====================================\n')
 await m.reply(teks)
 let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['🔥⃟🔎𝑴𝑬𝑵𝑼 𝑫𝑬 𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹𝑬𝑺🔥⃟📌', '/menúbuscadores'],
['➶⃟🤖𝑬𝑺𝑻𝑨𝑫𝑶 𝑫𝑬𝑳 𝑩𝑶𝑻➶⃟🔧', '/estado'],
['🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '/menu']
], m,)      
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
export default handler
