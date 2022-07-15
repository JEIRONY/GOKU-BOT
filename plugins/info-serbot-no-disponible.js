import fs from 'fs'
//import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let pp = 'https://i.imgur.com/WwxBm8o.jpg' //'./media/menus/Menu1.jpg'
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//try {
//pp = await conn.getProfilePicture(who)
//} catch (e) {

//} finally { }
  await m.reply(`╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let text = `
*Las funciones | The functions #jadibot #bots #serbot #subbot #getcode. No estan disponibles en | Are not available in* ${gt}`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】|YOVANI',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})  
  
  let info = `✨ *Infórmate sobre las Novedades y recuerda tener la última versión.*\n💫 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
  await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𒆎⃟⚕️𝑪𝑼𝑬𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺𒆎⃟♦', '/cuentasgb'],
['✧͢⃟ᤢ✨𝑮𝑹𝑼𝑷𝑶𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺 𝑫𝑬𝑳 𝑩𝑶𝑻✧͢⃟ᤢ🤖', '.grupos'],
['🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '/menu']
], m,)
  
  //await conn.sendButton(m.chat, `Infórmate sobre las Novedades y recuerda tener la última versión.\nFind out about what's new and remember to have the latest version.`, author, url, [['◀️𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴▶️', /${command}], ['◀️𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 2▶️', /${command}]], m)
}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler
