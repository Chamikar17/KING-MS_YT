const {cmd , commands} = require('../command')
const fg = require(`api-dylux`)
const yts = require(`yt-search`)


cmd({
    pattern: "song",
    desc: "song downloader",
    category: "download",
    filename: __fileName}

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try}
if(!q) return reply("please give me url")
const search = await yts(q)
const deta = search.video[0];
const url = data.url

let desc =`
*KING-MS BOT FING SONG 📎*

*──────────────────*
🛑 *𝗧𝗜𝗧𝗟𝗘* : ${data.title}
*──────────────────*
*──────────────────*
🛑 *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡* : ${data.description}
*──────────────────*
*──────────────────*
🛑 *𝗧𝗜𝗠𝗘* : ${data.time}
*──────────────────*
*──────────────────*
🛑 *𝗘𝗚𝗢* : ${data.ago}
*──────────────────*
*──────────────────*
🛑 *𝗩𝗜𝗘𝗪𝗦*: ${data.views}
*──────────────────*
`
await conn.sendMassage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
//downloader audio 

let down = await fg.yta(url)
let downloadurl = down.dl_url

//audio massage 

await conn.sendMassage(from,{audio: {url:downloadurl},minetype:"audio/mpeg"},{quoted:mek})
    

}catch(e){
console.log(e)
reply(`no`)
  

}


}
