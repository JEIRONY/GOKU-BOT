import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} ๐๐๐ ๐ฟ๐ ๐๐ผ ๐๐๐๐๐๐๐๐๐ ๐๐ผ๐๐๐๐ผ\n*${usedPrefix + command} ษขแดแดแด*\n\n๐๐๐ ๐พ๐๐๐๐ผ๐๐ฟ ๐๐๐๐\n*${usedPrefix + command} *` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
โฐโฑ๐โฑ *๐ฬ๐๐๐๐ | ๐๐๐พ๐พ๐๐๐* โฑ๐โฑโฎ`.trim(), m)
  
  conn.sendHydrated(m.chat, `๐ ๐๐๐จ๐ช๐ก๐ฉ๐๐๐ค | ๐๐๐จ๐ช๐ก๐ฉ: ${text}`, `๐๐๐ฃ๐ฉ๐๐ง๐๐จ๐ฉ | ${wm}`, null, md, 'ใ๏ฝก_๏ฝกใ ษขแดแดแด - สแดแด ใ๏ฝก_๏ฝกใ', null, null, [
['โ๏ธ๐๐๐๐ช๐๐๐ฃ๐ฉ๐โถ๏ธ |๐๐๐๐ญ๐ฉ', `/pinterest ${text}`],
['โงอขโแคขโจ๐ฎ๐น๐ผ๐ท๐ถ๐บ ๐ถ๐ญ๐ฐ๐ช๐ฐ๐จ๐ณ๐ฌ๐บ ๐ซ๐ฌ๐ณ ๐ฉ๐ถ๐ปโงอขโแคข๐ค', '.grupos'],
['๐ทโ๐ฉโ๐ป๐ด๐ฐ ๐ช๐น๐ฌ๐จ๐ซ๐ถ๐น๐ทโ๐ค', '#owner'],
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
