import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
      {title: "GRUPOS", description: null, rowId: `${usedPrefix}grupos`},
      {title: "BUSCADORES", description: null, rowId: `${usedPrefix}menúbuscadores`},
       {title: "ACTIVAR O DESACTIVAR", description: null, rowId: `${usedPrefix}menuactivación`},
         {title: "ESTADO", description: null, rowId: `${usedPrefix} estado`},
         {title: "ACTIVAR BIENVENIDA", description: null, rowId: `${usedPrefix}enable welcome`},
           {title: "DESACTIVAR BIENVENIDA࣭", description: null, rowId: `${usedPrefix}disable welcome`},
      {title: "DONAR", description: null, rowId: `${usedPrefix}donar`},
      {title: "RANDOM", description: null, rowId: `${usedPrefix}menuranbom`},
       {title: "ANONIMO", description: null, rowId: `${usedPrefix}menuanonimo`},
      {title: "STICKERS", description: null, rowId: `${usedPrefix}menustickers`},
      {title: "MI CREADOR", description: null, rowId: `${usedPrefix} creador`},
       {title: "HERRAMIENTAS", description: null, rowId: `${usedPrefix}menuherramienta`},
      {title: "INFORMACION", description: null, rowId: `${usedPrefix}menuinformación`},
       {title: "EFECTOS Y LOGOS", description: null, rowId: `${usedPrefix}menuefectos`},
        {title: "INVOCAR GRUPO", description: null, rowId: `${usedPrefix}invocar`},
        {title: "REGISTRO🏫", description: null, rowId: `${usedPrefix}register`},
          {title: "TU PERFIL", description: null, rowId: `${usedPrefix}perfil`},
      {title: "JUEGOS", description: null, rowId: `${usedPrefix}menujuegos`},
      {title: "MENU DEL DUEÑO", description: null, rowId: `${usedPrefix}menupropietario`},
       {title: "CUENTAS GB", description: null, rowId: `${usedPrefix}cuentasgb`},
       {title: "INFORMACION DEL BOT", description: null, rowId: `${usedPrefix}infobot`},
         {title: "INFORMACION DEL GRUPO", description: null, rowId: `${usedPrefix}infogrupo`},
         {title: "VELOCIDAD DEL BOT", description: null, rowId: `${usedPrefix}ping`},
        {title: "ACTIVAR ANTILINK", description: null, rowId: `${usedPrefix}enable antilink`},
          {title: "DESACTIVAR ANTILINKꦽ", description: null, rowId: `${usedPrefix}disable antilink`},
          {title: "ECONOMIA", description: null, rowId: `${usedPrefix}menueconomía`},
      {title: "DESCARGAS", description: null, rowId: `${usedPrefix}menúdescargas`},
        {title: "LOGOS", description: null, rowId: `${usedPrefix}logos`},
      {title: "AUDIOS", description: null, rowId: `${usedPrefix}menu2`},
      {title: "GESTION", description: null, rowId: `${usedPrefix}menugestion`},
      {title: "PORNO", description: null, rowId: `${usedPrefix}menulabiblia`},

 
]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `
╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ
┆【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ
┆${ucapan()} ๖ۣۜۜ͜͡Holaঔৣֳ᷌᷈͜͡ ${name} 💖✨ 
┆─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
┆𝐕𝐄𝐑𝐒𝐈Ó𝐍:2 【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】
╰─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄ׂ`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐 | 𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
}
