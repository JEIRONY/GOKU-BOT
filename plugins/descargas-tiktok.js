import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix, args}) => {
if (!text) throw `${mg}𝘿𝙀𝘽𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝘼 𝙏𝙄𝙆𝙏𝙊𝙆 𝙇𝙄𝙉𝙆 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*`
//if (command == 'tiktokaudio') {
//conn.reply(m.chat, `${eg}PRONTO TENDRA EL VIDEO DE TIKTOK*`, m, {
//contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
//title: 【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】'|YOVANI ',
//body: 'Super Bot WhatsApp',         
//previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
//sourceUrl: `http ɢᴏᴋᴜBot-MD`}}})
           
//let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
//let json = await res.json()
//conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'mp3/mp4' })}

conn.reply(m.chat, `${eg}𝙋𝙍𝙊𝙉𝙏𝙊 𝙏𝙀𝙉𝘿𝙍𝘼 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 \n𝙎𝙊𝙊𝙉 𝙒𝙄𝙇𝙇 𝙃𝘼𝙑𝙀 𝙏𝙃𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙑𝙄𝘿𝙀𝙊 🥳`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】|YOVANI ',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://ɢᴏᴋᴜ`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
await conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `${wm}`, m)

let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['❤️⃟⃪͡🗃️𝐌𝐄𝐍𝐔 𝑫𝑬 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒❤️⃟⃪͡🎁', '/menúdescargas'],
['🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '/menu'],
['☙⃝✈️𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫 𝑫𝑬𝑳 𝑩𝑶𝑻☙⃝🚀️', '/ping']
], m,)   
           
}
handler.help = ['tiktok'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok']
handler.exp = 60
export default handler
