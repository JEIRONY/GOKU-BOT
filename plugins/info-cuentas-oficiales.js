let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
💙 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
💜𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘼𝘾𝘾𝙊𝙐𝙉𝙏𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *INSTAGRAM - ASISTENCIA*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *YOUTUBE*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://www.youtube.com/channel/UCCrEOFYcEqK28CJq7EwB6rg, '𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
['✧͢⃟ᤢ✨𝑮𝑹𝑼𝑷𝑶𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺 𝑫𝑬𝑳 𝑩𝑶𝑻✧͢⃟ᤢ🤖', '.grupos'],
['🍷⃟👩‍💻𝑴𝑰 𝑪𝑹𝑬𝑨𝑫𝑶𝑹🍷⃟🤖', '#owner'],
['🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|ɢᴏᴋᴜig|cuentasgb|cuentagb|accounts|ɢᴏᴋᴜaccounts|account|igɢᴏᴋᴜ|cuentasdeɢᴏᴋᴜ|cuentasdeɢᴏᴋᴜbot|cuentaɢᴏᴋᴜbot|cuentasɢᴏᴋᴜbot$/i
handler.exp = 35
export default handler
