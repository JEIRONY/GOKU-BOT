let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let str = `
╭─ׂ┄──ׂ┄┄ׅ─ ┄ׂ─ ┄ׅ
┆🍃【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】-✨
┆──ׂ┄┄ׅ─ ┄ׂ─ ┄
┆💖Hola Gracias por solicitar la instalación del bot✨🤖 aquí tienes los requisitos para instalar el bot🍃
┆──ׂ┄┄ׅ─ ┄ׂ─ ┄
┆ TERMUX
https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file
┆──ׂ┄┄ׅ─ ┄ׂ─ ┄
┆🍃COMANDOS🤖 
┆> pkg update && pkg upgrade
┆> pkg install git -y
┆> pkg install nodejs -y
┆> pkg install ffmpeg -y
┆> pkg install imagemagick -y
┆> termux-setup-storage
┆> git clone https://github.com/JEIRONY/THE-DARK-KING.git
┆> cd THE-DARK-KING
┆> npm install
┆> pkg install yarn
┆> npm update
┆> yarn
┆> npm start
┆──ׂ┄┄ׅ─ ┄ׂ─ ┄
┆WHATSAPP RECOMENDADO 
https://www.mediafire.com/file/3lzk2l83di64tc2/☻️+𝔸𝕓𝕦+𝔹𝕃𝔸ℂ𝕂+☻️.apk/file
┆──ׂ┄┄ׅ─ ┄ׂ─ ┄
┆GRUPOS OFICIALES DEL BOT
┆🍃【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】-1✨
┆https://chat.whatsapp.com/IAdTfUN1HwzClqA3UDpAbu
┆🍃【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】-2✨
┆https://chat.whatsapp.com/IAdTfUN1HwzClqA3UDpAbu
┆🍃【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】-3✨
┆https://chat.whatsapp.com/IAdTfUN1HwzClqA3UDpAbu
┆──ׂ┄┄ׅ─ ┄ׂ─ ┄
┆SI NECESITAS AYUDA PUEDES ┆CONTACTARTE ESTE NÚMERO
┆http://wa.me/573152139466
╰─ׂ┄─ׅ─ׂ┄

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

handler.command = /^instalación|instalarbot$/i
handler.exp = 33

export default handler
