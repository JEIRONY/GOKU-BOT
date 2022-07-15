let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt)

await m.reply('🚀')
await m.reply('🚀🚀')
await m.reply('🚀🚀🚀')
await m.reply(`╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮`)
 
let veloz = 
`🚄 *VELOCIDAD:*\n *${speed}* *Milisegundos*\n\n🚄 *SPEED:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴', url: 'https://www.youtube.com/channel/UCCrEOFYcEqK28CJq7EwB6rg}},
{index: 2, urlButton: {displayText: '🥳𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:', url: 'https://www.facebook.com/groups/987464505464904/'}},
{index: 3, quickReplyButton: {displayText: '☙⃝✈️𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫 𝑫𝑬𝑳 𝑩𝑶𝑻☙⃝🚀', id: '#ping'}},
{index: 4, quickReplyButton: {displayText: 'ⓞ⃟❗𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰Ó𝑵𝑩𝑶𝑻ⓞ⃟♦', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: '🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', id: '#menu'}},
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
