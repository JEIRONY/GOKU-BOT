import fs from 'fs'
let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

await conn.reply(m.chat, `*╭━[ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙑𝙄𝙋 | 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍𝙎 ]━⬣*\n*┃*\n` + prem.map(v => '*┃* ➥ 💎 @' + v.replace(/@.+/, ' 💎')).join`\n`, m, { contextInfo: { mentionedJid: prem } }) 
   
  let text = `𝙌𝙐𝙀 𝙋𝙍𝙊!!  𝙏𝙃𝙀𝙔!! ✨`.trim()   
await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '❍͜͡【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】|JEIRONY ',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})
   
await conn.sendHydrated(m.chat, null, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['👻️⃟⃪͡ꦽ𝑽𝑬𝑹 𝑮𝑹𝑼𝑷𝑶𝑺🧨️⃟⃪͡ꦽ', '#grupolista'],
['👩‍💻️⃟⃪͡ꦽ𝑪𝑼𝑬𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺🍃️⃟⃪͡ꦽ', '/cuentasgb'],
['🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '.menu']
], m,)
   
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i

export default handler
