import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix, args}) => {
if (!text) throw `${mg}πΏππ½π πππππππΌπ ππ ππππΌπΎπ πΏπ ππππππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*\n\nπππ ππππ πππππ πΌ ππππππ ππππ ππ πΏππππππΌπΏ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*`
//if (command == 'tiktokaudio') {
//conn.reply(m.chat, `${eg}PRONTO TENDRA EL VIDEO DE TIKTOK*`, m, {
//contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
//title: γο½‘_ο½‘γ Ι’α΄α΄α΄ - Κα΄α΄ γο½‘_ο½‘γ'|YOVANI ',
//body: 'Super Bot WhatsApp',         
//previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
//sourceUrl: `http Ι’α΄α΄α΄Bot-MD`}}})
           
//let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
//let json = await res.json()
//conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'mp3/mp4' })}

conn.reply(m.chat, `${eg}ππππππ ππππΏππΌ ππ πππΏππ πΏπ ππππππ \nππππ ππππ ππΌππ πππ ππππππ πππΏππ π₯³`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'γο½‘_ο½‘γ Ι’α΄α΄α΄ - Κα΄α΄ γο½‘_ο½‘γ|YOVANI ',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://Ι’α΄α΄α΄`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
await conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `${wm}`, m)

let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['β€οΈββͺΝ‘ποΈππππ π«π¬ πππππππππβ€οΈββͺΝ‘π', '/menΓΊdescargas'],
['π₯οΈββͺΝ‘κ¦½π΄π¬π΅πΌποΈββͺΝ‘κ¦½', '/menu'],
['βββοΈπ½π¬π³πΆπͺπ°π«π¨π« π«π¬π³ π©πΆπ»ββποΈ', '/ping']
], m,)   
           
}
handler.help = ['tiktok'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok']
handler.exp = 60
export default handler
