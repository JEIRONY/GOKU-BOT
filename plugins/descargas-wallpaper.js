import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}๐ฟ๐๐ฝ๐ ๐๐๐พ๐๐๐ฝ๐๐ ๐๐ ๐๐๐๐ฝ๐๐\n๐๐๐๐๐๐๐\n*${usedPrefix + command} ษขแดแดแด*\n\n ๐๐ผ๐๐\n๐๐๐ผ๐๐๐๐\n*${usedPrefix + command} *`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
//conn.sendFile(m.chat, img, 'error.jpg', `*๐๐ด๐๐๐ป๐๐ฐ๐ณ๐พ ๐ณ๐ด ${text}*`, m)
  
  conn.sendHydrated(m.chat, `๐ ๐๐๐จ๐ช๐ก๐ฉ๐๐๐ค | ๐๐๐จ๐ช๐ก๐ฉ: ${text}`, `๐๐ค๐ฃ๐๐ค | ๐๐ฅ | ${wm}`, img, img, 'โ๏ธ ๐๐๐', null, null, [
['โ๏ธ๐๐๐๐ช๐๐๐ฃ๐ฉ๐โถ๏ธ | ๐๐๐๐ญ๐ฉ', `${usedPrefix + command} ${text}`],
['๐๏ธโโชอก๊ฆฝ๐ท๐ฐ๐ต๐ป๐ฌ๐น๐ฌ๐บ๐ป๐๏ธโโชอก', `#pinterest ${text}`],
['๐๏ธโโชอก๊ฆฝ๐ฎ๐ถ๐ถ๐ฎ๐ณ๐ฌ ๐๏ธโโชอก', `#image ${text}`],
], m)
  
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|wallpaper2?)$/i
handler.exp = 29
export default handler 
