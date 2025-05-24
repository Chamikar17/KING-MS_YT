const config = require('../config')
const { cmd, commands } = require('../command')

// Define the ping command
cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "📟",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Start timer to calculate ping
        const startTime = Date.now()

        // Send initial message
        const message = await conn.sendMessage(from, { text: '*TASTING PING... 📟*' })

        // End timer and calculate ping
        const endTime = Date.now()
        const ping = endTime - startTime

        // Channel information text
        const channelInfo = `
         *ριɳɠ* : ${ping}ms
          > KING - MS 
       
        `;

        // Send the ping result along with the channel info
        await conn.sendMessage(
            from,
            {
                text: channelInfo,
                contextInfo: {
                    externalAdReply: {
                        title: "𝙽𝙴𝙾𝙽-𝙼𝙳",
                        body: "© 𝙽𝙴𝙾𝙽-𝙼𝙳🫣",
                        thumbnail: { url: " " },
                        sourceUrl: " ",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            },
            { quoted: message }
        );
    } catch (e) {
        // Log any errors to the console and reply with error message
        console.log(e)
        reply(`Error: ${e.message}`)
    }
});
          mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            },
            { quoted: message }
        );
    } catch (e) {
        // Log any errors to the console and reply with error message
        console.log(e)
        reply(`Error: ${e.message}`)
    }
});
