import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[โ๐๐๐๐โ] ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*#play Good Feeling - Flo Rida*`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '*[โ๐๐๐๐โ] ๐ป๐พ ๐๐ธ๐ด๐ฝ๐๐พ, ๐ฝ๐พ ๐ฟ๐๐ณ๐ด ๐ด๐ฝ๐ฒ๐พ๐ฝ๐๐๐ฐ๐ ๐ด๐ป ๐ฐ๐๐ณ๐ธ๐พ/๐๐ธ๐ณ๐ด๐พ, ๐ธ๐ฝ๐๐ด๐ฝ๐๐ด ๐ฒ๐พ๐ฝ ๐พ๐๐๐พ ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ*'
  try {
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
โญโโโโโโฏ๐ฉแึึถ๐ชโฉโฏโโโโโโฎ
โใ๏ฝก_๏ฝกใ ษขแดแดแด - สแดแด ใ๏ฝก_๏ฝกใ
โโโโโโชโฏ๐ฉแึึถ๐ชโฉโฏโซโโโโฏ  
โโ โ   โโใค โทใคโป
โ   เผดโ๐นเฝผเนเฃญ๊ฆฟโฉPLAY
โโญโโคออก๐ *๐๐ธ๐๐๐ป๐พ:* ${title}
โโฐโคออก๐ *๐ณ๐ด๐๐ฒ๐๐ธ๐ฟ๐ฒ๐ธ๐พ๐ฝ:* ${description}
โโญโโคออก๐ *๐ฟ๐๐ฑ๐ป๐ธ๐ฒ๐ฐ๐ณ๐พ:* ${publishedTime}
โโฐโคออกโ *๐ณ๐๐๐ฐ๐ฒ๐ธ๐พ๐ฝ:* ${durationH}
โโญโโคออก๐ *๐๐ธ๐๐๐ฐ๐:* ${viewH}
โโฐโคออก๐ *๐๐๐ป:* ${url}
โใ๏ฝก_๏ฝกใ ษขแดแดแด - สแดแด ใ๏ฝก_๏ฝกใ
โฐโโโโโโฏ๐ฉแึึถ๐ชโฉโฏโโโโโโฏ
  `.trim(), author, thumbnail, '', '', null, null, [
    ['๐๐๐๐๐', `${usedPrefix}yta ${url} yes`],
    ['๐๐๐๐๐', `${usedPrefix}ytv ${url} yes`]
  ], m)
}catch(e){
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
