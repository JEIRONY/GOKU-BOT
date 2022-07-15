import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} 𝙐𝙎𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n*${usedPrefix + command} ɢᴏᴋᴜ*\n\n𝙐𝙎𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙆𝙀\n*${usedPrefix + command} *` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮`.trim(), m)
  
  conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, '【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】', null, null, [
['◀️𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚▶️ |🍃𝙉𝙚𝙭𝙩', `/pinterest ${text}`],
['✧͢⃟ᤢ✨𝑮𝑹𝑼𝑷𝑶𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺 𝑫𝑬𝑳 𝑩𝑶𝑻✧͢⃟ᤢ🤖', '.grupos'],
['🍷⃟👩‍💻𝑴𝑰 𝑪𝑹𝑬𝑨𝑫𝑶𝑹🍷⃟🤖', '#owner'],
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
