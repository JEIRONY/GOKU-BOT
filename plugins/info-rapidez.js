let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt)

await m.reply('๐')
await m.reply('๐๐')
await m.reply('๐๐๐')
await m.reply(`โฐโฑโโฑ *๐๐๐๐๐๐๐ผ๐ฟ๐ | ๐๐๐๐๐๐* โฑโโฑโฎ`)
 
let veloz = 
`๐ *VELOCIDAD:*\n *${speed}* *Milisegundos*\n\n๐ *SPEED:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '๐ฒ๐ฐ๐ฝ๐ฐ๐ป ๐ณ๐ด ๐๐พ๐๐๐๐ฑ๐ด', url: 'https://www.youtube.com/channel/UCCrEOFYcEqK28CJq7EwB6rg}},
{index: 2, urlButton: {displayText: '๐ฅณ๐๐ซ๐ฎ๐ฉ๐จ ๐๐ ๐๐๐๐๐๐จ๐จ๐ค:', url: 'https://www.facebook.com/groups/987464505464904/'}},
{index: 3, quickReplyButton: {displayText: 'โโโ๏ธ๐ฝ๐ฌ๐ณ๐ถ๐ช๐ฐ๐ซ๐จ๐ซ ๐ซ๐ฌ๐ณ ๐ฉ๐ถ๐ปโโ๐', id: '#ping'}},
{index: 4, quickReplyButton: {displayText: 'โโโ๐ฐ๐ต๐ญ๐ถ๐น๐ด๐จ๐ช๐ฐร๐ต๐ฉ๐ถ๐ปโโโฆ', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: '๐ฅ๏ธโโชอก๊ฆฝ๐ด๐ฌ๐ต๐ผ๐๏ธโโชอก๊ฆฝ', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

 

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
