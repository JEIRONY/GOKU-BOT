let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let str = `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├🙌HOLA TE ENVIAMOS 
├UNIRTE AL LOS💖
├ GRUPOS OFICIALES 
├ DEL BOT DE👩‍🏫✨
├ɢᴏᴋᴜ - ʙᴏᴛ SOMOS👩‍💻
├ UNA FAMILIA DE BOT
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├❍͜͡➣ɢᴏᴋᴜ - ʙᴏᴛ:1❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├https://chat.whatsapp.com/IAdTfUN1HwzClqA3UDpAbu
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├❍͜͡➣ɢᴏᴋᴜ - ʙᴏᴛ:2❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├https://chat.whatsapp.com/IAdTfUN1HwzClqA3UDpAbu
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├❍͜͡➣ɢᴏᴋᴜ - ʙᴏᴛ:3❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├https://chat.whatsapp.com/IAdTfUN1HwzClqA3UDpAbu
├【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】
https://chat.whatsapp.com/IAdTfUN1HwzClqA3UDpAbu
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n
*Please, do not enter with Bot numbers, and maintain respect.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://wa.me/573152139466', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
['👩‍💻️⃟⃪͡ꦽ𝑪𝑼𝑬𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺🍃️⃟⃪͡ꦽ', '.cuentasgb'],
['❍͜͡➣🎁𝑫𝑶𝑵𝑨𝑹💌❍͜͡➣', '.donar'],
['️🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '/menu']
], m,)}

handler.command = /^linkgc|grupos|gruposɢᴏᴋᴜbot|ɢᴏᴋᴜbotgrupos|gruposdeɢᴏᴋᴜbot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
