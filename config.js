const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ismaipboy32@gmail.com"
global.location="Mogadishu,somalia."


global.mongodb= process.env.MONGODB_URI || "mbyakjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/mogadishu";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/829a65be73efa066d8293.jpg=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";252682642802
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252682642802";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1 to 5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,";false


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,252684748763";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "252684748763,22684748763";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_44_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCcFZ1dHNwQ2xjS0lreUlkQzU5Z3g3WEpQL0pRbjFSYkNueHptZHNLVnQ0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjY4NDc0ODc2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODc4QjMwQ0Y2QTBEODk3NUI5MjAyNTFBMUFEQ0VFNEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjA0NjQzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjg0NzQ4NzYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1M0QzMjc0QTdFQzBCRkQ5RUZDN0RCRDkwMzQxOTUzNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MDQ2NDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTHJMaWp5eHJUWlNIUHE4YnBjREJEd1wiLFxuICBcInBob25lSWRcIjogXCI3NmZjOWE5Yy02NjUxLTQ5MTUtYTk0My0wZjI3OGI2NTVjMGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICA0NixcbiAgICAgIDIxNCxcbiAgICAgIDEzNyxcbiAgICAgIDE1MCxcbiAgICAgIDE0NyxcbiAgICAgIDEwMSxcbiAgICAgIDExOSxcbiAgICAgIDgzLFxuICAgICAgOTksXG4gICAgICAyMDYsXG4gICAgICA5OCxcbiAgICAgIDIzOCxcbiAgICAgIDI1LFxuICAgICAgMjQyLFxuICAgICAgMjA0LFxuICAgICAgNjksXG4gICAgICAxMTgsXG4gICAgICAxNCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMjEsXG4gICAgICA4OSxcbiAgICAgIDc5LFxuICAgICAgMjE5LFxuICAgICAgMTExLFxuICAgICAgMTc1LFxuICAgICAgOTgsXG4gICAgICAyMjAsXG4gICAgICAyNDIsXG4gICAgICAxNjUsXG4gICAgICAyMDEsXG4gICAgICAxOCxcbiAgICAgIDI1MyxcbiAgICAgIDcyLFxuICAgICAgMTg1LFxuICAgICAgOCxcbiAgICAgIDg0LFxuICAgICAgMjM5LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUNIUk1MQ0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY4NDc0ODc2MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTU3MTQyNjYyMzkwODE6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJkYWRkc3VnYXI3N1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x2YnNyRUNFTjZ2dWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ1hUWnA3Ym44QkgzODlzV1E4M3ZoTDM1WVNKRkNiUUQzOWdxNmJwa216bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1bUhjZ243L2F6dlV3TTY2OXZpeE5LOVpQaXFGWVcxTWEydWFIMEptYnhYZjZQcFhQcWVFQTFxRVZKa1RsK3h1NTluQnR5Vy9GaFdVaGJxR0w5ejJDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1MXJ6QXptT1BBYnpRUGZYWFl5Y3Y0RU41NTVZblJEWWwyUENUem4wK3ZOS2NhbCtETWdZSDRoVEdEWFE3Z3JIenZseUxZMUxoMlhRdlpFb3VGUUREQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2ODQ3NDg3NjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYwNDY0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUo3NlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjc2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiS2pwUnlJZUFyNm5hTFZ2aS9LWUdoYnRaSURXczk5Ulg2Z0tFaWwrVURscz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NDA0NjIyNjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYwNDY0NDExMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "rule_breaker",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "lukas&sumaya",


  errorChat : process.env.ERROR_CHAT || ""252684748763,
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
