let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭──────────♡
 *JEIRONY*
 ━━━━━━ † ━━━━━━━━
 *𝗛ola, ${username}!!*
 ━━━━━━ † ━━━━━━━━
 *Creador del Bot: JEIRONY* 

- *Numero del creador:* *wa.me/573152139466 (No Bot)*
 
- *PayPal:* *https://www.paypal.me/serviciosjava*
 
- Si eres de colombia puedes hacerlo por Nequi, mas informacion aqui --> https://wa.link/g2376k
 
╰───────────♡

╭═══ .✧. ═══╮
┃ *MENU*
 ━━━━ † ━━━━━━
┣ ${usedPrefix}sc
┣ ${usedPrefix}donar
┣ ${usedPrefix}infobot
┣ ${usedPrefix}grupos
┣ ${usedPrefix}menuaudios
┣ ${usedPrefix}estado
╰═══ .✧. ═══╯
╭═══ .✧. ═══╮
┃ UNE UN BOT A TU GRUPO
 ━━━━ † ━━━━━━
┣ ${usedPrefix}join *link del grupo*
┣ ${usedPrefix}bots
╰═══ .✧. ═══╯
╭═══ .✧. ═══╮
┃ NUMERO DEL CREADOR
 ━━━━ † ━━━━━
┣ ${usedPrefix}owner
╰═══ .✧. ═══╯
╭═══ .✧. ═══╮
┃ JUEGOS
 ━━━━ † ━━━━━
┣ ${usedPrefix}math *modo*
┣ ${usedPrefix}ttt *nombre del la sala*
┣ ${usedPrefix}delttt *nombre del la sala*
┣ ${usedPrefix}ppt *piedra / papel / tijera*
╰═══ .✧. ═══╯
╭═══ .✧. ═══╮
 ━━━━ † ━━━━━
┣ ${usedPrefix}imagen *texto*
┣ ${usedPrefix}ytsearch *texto*
┣ ${usedPrefix}dlaudio *link yt*
┣ ${usedPrefix}dlvid *link yt*
┣ ${usedPrefix}ytmp3 *link yt*
┣ ${usedPrefix}ytmp4 *link yt*
┣ ${usedPrefix}ytmp4.2 *link yt*
┣ ${usedPrefix}play *titulo del audio*
┣ ${usedPrefix}play2 *titulo del video*
┣ ${usedPrefix}play3 *titulo del audio/video*
┣ ${usedPrefix}play4 *titulo del video*
┣ ${usedPrefix}letra *nombredelacanción*
┣ ${usedPrefix}pinterestvideo *link de pinterest*
┣ ${usedPrefix}tiktokaudio *link del tiktok*
┣ ${usedPrefix}tiktok *link*
┣ ${usedPrefix}spotify *autor, cancion*
┣ ${usedPrefix}acortar *link*
╰═══ .✧. ═══╯
╭═══ .✧. ═══╮
┃ GESTION DE GRUPOS 
 ━━━━ † ━━━━━
┣  ${usedPrefix}admins *texto* 
┣  ${usedPrefix}añadir *numero* 
┣  ${usedPrefix}sacar @tag
┣  ${usedPrefix}save *@tag + nombre de contacto*
┣  ${usedPrefix}daradmin *@tag*
┣  ${usedPrefix}quitaradmin *@tag*
┣  ${usedPrefix}grupo *abrir / cerrar*
┣  ${usedPrefix}enable welcome
┣  ${usedPrefix}disable welcome
┣  ${usedPrefix}enable antilink
┣  ${usedPrefix}disable antilink
┣  ${usedPrefix}enable antilink2
┣  ${usedPrefix}disable antilink2
┣  ${usedPrefix}enable delete
┣  ${usedPrefix}disable  delete
┣  ${usedPrefix}link
┣  ${usedPrefix}notificar *texto*
┣  ${usedPrefix}setname *Nuevo nombre del grupo*
┣  ${usedPrefix}setdesc *Nueva descripción del grupo*
┣  ${usedPrefix}infogrupo
┣  ${usedPrefix}invocar *texto*
┣  ${usedPrefix}del *responder a un mensaje del bot*
┣  ${usedPrefix}fantasmas
┣  ${usedPrefix}banchat
┣  ${usedPrefix}unbanchat
╰═══ .✧. ═══╯
╭═══ .✧. ═══╮
┃ CREADORES
 ━━━━ † ━━━━━
┣ ${usedPrefix}s
┣ ${usedPrefix}sticker
┣ ${usedPrefix}attp *texto*
┣ ${usedPrefix}style *texto*
┣ ${usedPrefix}attp2 *texto*
┣ ${usedPrefix}stickerfilter
┣ ${usedPrefix}gif *responde a un sticker/video*
┣ ${usedPrefix}subirestado *texto / responder video, imagen o gif*
╰═══ .✧. ═══╯
╭═══ .✧. ═══╮
┃ AUDIOS 
 ━━━━ † ━━━━━
┣ ${usedPrefix}menuaudios
╰═══ .✧. ═══╯
╭═══ .✧. ═══╮
┃ CONVIERTETE EN BOT
 ━━━━ † ━━━━━
┣ ${usedPrefix}stop
┣ ${usedPrefix}jadibot
┣ ${usedPrefix}getcode
╰═══ .✧. ═══╯
╭═══ .✧. ═══╮
┃ PROPIETARO DEL BOT
 ━━━━ † ━━━━━
┣ ${usedPrefix}boost
┣ ${usedPrefix}restart
┣ ${usedPrefix}banlist
┣ ${usedPrefix}banchat2
┣ ${usedPrefix}actualizar
┣ ${usedPrefix}CajaFuerte
┣ ${usedPrefix}unbanchat2
┣ ${usedPrefix}bc *texto*
┣ ${usedPrefix}deletechat
┣ ${usedPrefix}mutechat
┣ ${usedPrefix}bcgc *texto*
┣ ${usedPrefix}bcbot *texto*
┣ ${usedPrefix}mutechat *all*
┣ ${usedPrefix}setbye *@tag*
┣ ${usedPrefix}banuser *@tag*
┣ ${usedPrefix}deletechat *all*
┣ ${usedPrefix}mutechat *chat*
┣ ${usedPrefix}mutechat *group*
┣ ${usedPrefix}enable *public*
┣ ${usedPrefix}disable *public*
┣ ${usedPrefix}deletechat *chat*
┣ ${usedPrefix}deletechat *group*
┣ ${usedPrefix}unbanuser *@tag*
┣ ${usedPrefix}listgroup *@tag*
┣ ${usedPrefix}enable *restrict*
┣ ${usedPrefix}enable *autoread*
┣ ${usedPrefix}setwelcome *@tag*
┣ ${usedPrefix}enable *autoread*
┣ ${usedPrefix}disable *autoread*
╰═══ .✧. ═══╯`.trim()
let mentionedJid = [who]
conn.sendButtonImg(m.chat, pp, menu, '©GOKU-BOT\n █║▌║││█║▌║▌║ ', '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
export default handler
