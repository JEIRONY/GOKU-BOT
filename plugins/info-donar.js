let media = './media/menus/Menu4paypal.Mp4'
let handler = async (m, { conn, command }) => {
let str = `
╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
┆⇶ ❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
💖𝐇𝐎𝐋𝐀 𝐓𝐄 𝐀𝐆𝐑𝐀𝐃𝐄𝐂𝐄𝐌𝐎𝐒🥳 𝐏𝐎𝐑 𝐀𝐏𝐎𝐘𝐀𝐑𝐌𝐄👋 𝐘 𝐏𝐎𝐑 𝐒𝐈𝐄𝐌𝐏𝐑𝐄 𝐔𝐒𝐀𝐑 𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓🤖 𝐆𝐑𝐀𝐂𝐈𝐀𝐒 𝐏𝐎𝐑 𝐓𝐔 𝐏𝐑𝐄𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀 𝐋𝐄𝐒 🎆𝐀𝐆𝐑𝐀𝐃𝐄𝐂𝐄𝐑Í𝐀 𝐌𝐔𝐂𝐇𝐎 𝐒𝐈 𝐌𝐄 𝐏𝐔𝐄𝐃𝐄𝐍 𝐀𝐏𝐎𝐘𝐀𝐑 𝐄𝐍 𝐃𝐎𝐍𝐀𝐑🎁 𝐏𝐀𝐑𝐀 𝐄𝐋 𝐒𝐄𝐑𝐕𝐈𝐂𝐈𝐎 𝐃𝐄 𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓🤖 𝐘 𝐏𝐀𝐑𝐀 𝐒𝐄𝐆𝐔𝐈𝐑 𝐓𝐑𝐀𝐁𝐀𝐉𝐀𝐍𝐃𝐎 𝐘 𝐏𝐀𝐑𝐀 😊𝐌𝐄𝐓𝐄𝐑 𝐍𝐔𝐄𝐕𝐎 𝐂𝐎𝐍𝐓𝐄𝐍𝐈𝐃𝐎 𝐀𝐋 𝐁𝐎𝐓👩‍💻 𝐓𝐎𝐃𝐎 𝐄𝐒𝐓𝐎 𝐋𝐎 𝐇𝐀𝐆𝐎 𝐂𝐎𝐍 𝐄𝐋 💖✨𝐅𝐈𝐍 𝐃𝐄 🥳𝐃𝐀𝐑𝐋𝐄𝐒 𝐔𝐍 𝐌𝐄𝐉𝐎𝐑 𝐒𝐄𝐑𝐕𝐈𝐂𝐈𝐎👩‍💻 𝐄𝐒𝐏𝐄𝐑𝐎 𝐘 𝐌𝐄 𝐏𝐔𝐄𝐃𝐀𝐍 𝐀𝐘𝐔𝐃𝐀𝐑 𝐘 👩‍🏫𝐓𝐀𝐌𝐁𝐈É𝐍 𝐌𝐄 𝐀𝐘𝐔𝐃𝐀𝐑Í𝐀 𝐌𝐔𝐂𝐇𝐎 𝐀 𝐒𝐔𝐒𝐂𝐑𝐈𝐁𝐈𝐑𝐒𝐄 💖𝐀𝐋 𝐂𝐀𝐍𝐀𝐋 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐄 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐄 🤖𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓 𝐆𝐑𝐀𝐂𝐈𝐀𝐒 𝐏𝐎𝐑 𝐒𝐔 𝐀𝐓𝐄𝐍𝐂𝐈Ó𝐍 🥳
┆┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄
💖𝐇𝐄𝐋𝐋𝐎 𝐖𝐄 𝐓𝐇𝐀𝐍𝐊 𝐘𝐎𝐔🥳 𝐅𝐎𝐑 𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐈𝐍𝐆 𝐌𝐄👋 𝐀𝐍𝐃 𝐅𝐎𝐑 𝐀𝐋𝐖𝐀𝐘𝐒 𝐔𝐒𝐈𝐍𝐆 𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓🤖 𝐓𝐇𝐀𝐍𝐊 𝐘𝐎𝐔 𝐅𝐎𝐑 𝐘𝐎𝐔𝐑 𝐏𝐑𝐄𝐅𝐄𝐑𝐄𝐍𝐂𝐄 🎆𝐈 𝐖𝐎𝐔𝐋𝐃 𝐁𝐄 𝐕𝐄𝐑𝐘 𝐆𝐑𝐀𝐓𝐄𝐅𝐔𝐋 𝐈𝐅 𝐘𝐎𝐔 𝐂𝐀𝐍 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐌𝐄 𝐈𝐍 𝐃𝐎𝐍𝐀𝐓𝐄🎁 𝐅𝐎𝐑 𝐓𝐇𝐄 𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓 𝐒𝐄𝐑𝐕𝐈𝐂𝐄🤖 𝐀𝐍𝐃 𝐓𝐎 𝐅𝐎𝐋𝐋𝐎𝐖 𝐓𝐑
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆𝙋𝙖𝙮𝙋𝙖𝙡 - ❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓❍͜͡➣
┆https://youtu.be/dfc4akKNn6A
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:
┆https://www.facebook.com/groups/987464505464904
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://wa.me/5212411347465', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
], m,)}

handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 33

export default handler
