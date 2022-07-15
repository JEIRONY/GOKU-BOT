import fs from 'fs'
function handler(m, { conn }) {
let text = `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├яєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
├hola bien Bienvenid@s 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├яєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├ Presentarse
├ con foto 
├ nombre 
├ edad 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍 
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├ Lo que se hace en esta legion 
├ Somo un Legion los mejores
├ Atacamos grupos xxx
├ Mandar a soporte 
├ Hacker teléfonos
├ Robar número de WhatsApp
├ Hacker Facebook
├ Hacer números virtuales
├ Hacer virus
├ Espira las personas 
├ Hacer su propio WhatsApp 
├ Mandar WhatsApp inmunes
├ Troyanos
├ Puedes usar el bot la legión 
├ Recuperar contraseñas 
├ Atacar legiones hacen cosa por diversión 
├ Joder personas cp
├ Envira virus en laboratorio 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├яєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├Si quieres a prender 
├ponte las insignias 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├INSIGNIAS  
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├  ➣⃘⃕͜⃟⃤꙰.
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
├ Gracias por su atención 
├ Somos una legión
├ Todo esto lo hacemos con el fin de hacer le bien 
├ No por beneficios propio
├ яєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├https://chat.whatsapp.com/LGvb0X9GJM0LXE6yvWIE6x
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】|YOVANI ',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫o| 𝐂𝐫𝐞𝐚𝐭𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/menu5.jpg"),
sourceUrl: `https://wa.me/573152139466`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/menu5.jpg'
let str = `🧡 *Eso son los contactos para ti.*\n💜 *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.facebook.com/groups/987464505464904/', '𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:', null, null, [
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(reclutamiento)$/i
export default handler
