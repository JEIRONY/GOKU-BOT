import fs from 'fs'
let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

await conn.reply(m.chat, `*โญโ[ ๐๐๐๐ผ๐๐๐๐ ๐๐๐ | ๐๐๐๐๐๐๐ ๐๐๐๐๐ ]โโฌฃ*\n*โ*\n` + prem.map(v => '*โ* โฅ ๐ @' + v.replace(/@.+/, ' ๐')).join`\n`, m, { contextInfo: { mentionedJid: prem } }) 
   
  let text = `๐๐๐ ๐๐๐!!  ๐๐๐๐!! โจ`.trim()   
await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'โออกใ๏ฝก_๏ฝกใ ษขแดแดแด - สแดแด ใ๏ฝก_๏ฝกใ|JEIRONY ',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})
   
await conn.sendHydrated(m.chat, null, wm, null, ig, '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', null, null, [
['๐ป๏ธโโชอก๊ฆฝ๐ฝ๐ฌ๐น ๐ฎ๐น๐ผ๐ท๐ถ๐บ๐งจ๏ธโโชอก๊ฆฝ', '#grupolista'],
['๐ฉโ๐ป๏ธโโชอก๊ฆฝ๐ช๐ผ๐ฌ๐ต๐ป๐จ๐บ ๐ถ๐ญ๐ฐ๐ช๐ฐ๐จ๐ณ๐ฌ๐บ๐๏ธโโชอก๊ฆฝ', '/cuentasgb'],
['๐ฅ๏ธโโชอก๊ฆฝ๐ด๐ฌ๐ต๐ผ๐๏ธโโชอก๊ฆฝ', '.menu']
], m,)
   
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i

export default handler
