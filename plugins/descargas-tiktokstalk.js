import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 "@"\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} mundo_dos_animes81*\n\n𝙏𝙔𝙋𝙀 𝙔𝙊𝙐𝙍 𝙏𝙄𝙆𝙏𝙊𝙆 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀 𝙒𝙄𝙏𝙃𝙊𝙐𝙏 𝙐𝙎𝙄𝙉𝙂 "@"\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} universo_editx*`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let ɢᴏᴋᴜ = `
╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ
┆ 【｡_｡】 ɢᴏᴋᴜ - ʙᴏᴛ 【｡_｡】
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ
┆👤 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) | 𝙐𝙎𝙀𝙍
┆🔮${json.result.username}
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ
┆✨ 𝙉𝙊𝙈𝘽𝙍𝙀 | 𝙉𝘼𝙈𝙀
┆🥀${json.result.nickname}
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ
┆✅ 𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙍𝙀𝙎 | 𝙁𝙊𝙇𝙇𝙊𝙒𝙀𝙍𝙎 
┆🍃${json.result.followers}
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ
┆❇️ 𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙎 | 𝙁𝙊𝙇𝙇𝙊𝙒𝙄𝙉𝙂
┆♦️${json.result.followings}
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ
┆❤️ 𝙈𝙀 𝙂𝙐𝙎𝙏𝘼 | 𝙇𝙄𝙆𝙀𝙎
┆✨${json.result.likes}
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ
┆🎁 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘾𝙄𝙊𝙉𝙀𝙎 | 𝙋𝙊𝙎𝙏𝙎
┆🔍${json.result.video}
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ
┆👀 𝘽𝙄𝙊𝙂𝙍𝘼𝙁Í𝘼 | 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉
┆👻${json.result.bio}
╰─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄ׂ
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', ɢᴏᴋᴜ, m, false)
} catch (e) {
throw `${fg}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊.\n\n𝙉𝙊 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀 𝙁𝙊𝙐𝙉𝘿.`
}
let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['❤️⃟⃪͡🗃️𝐌𝐄𝐍𝐔 𝑫𝑬 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒❤️⃟⃪͡🎁', '/menúdescargas'],
['🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '/menu'],
['☙⃝✈️𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫 𝑫𝑬𝑳 𝑩𝑶𝑻☙⃝🚀️', '/ping']
], m,)  

}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.exp = 48
export default handler
