import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππππΌπππ πΏπ ππππππ πππ πππΌπ "@"\nπππππππ\n*${usedPrefix + command} mundo_dos_animes81*\n\nππππ ππππ ππππππ ππππππΌππ πππππππ πππππ "@"\nπππΌππππ\n*${usedPrefix + command} universo_editx*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
await conn.sendFile(m.chat, res, 'error.jpg', `β ππππ πΏπ ππππππ | πππππππ πππΎππππ\nπ *${text}*`, m, false)
  
  let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, md, 'γο½‘_ο½‘γ Ι’α΄α΄α΄ - Κα΄α΄ γο½‘_ο½‘γ', null, null, [
['β€οΈββͺΝ‘ποΈππππ π«π¬ πππππππππβ€οΈββͺΝ‘π', '/menΓΊdescargas'],
['π₯οΈββͺΝ‘κ¦½π΄π¬π΅πΌποΈββͺΝ‘κ¦½', '/menu'],
['βββοΈπ½π¬π³πΆπͺπ°π«π¨π« π«π¬π³ π©πΆπ»ββποΈ', '/ping']
], m,) 

}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.exp = 68
export default handler
