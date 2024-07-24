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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";252615189736
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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_37_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTksXG4gICAgICAgIDY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNuNVBvaWxMekdURXZFUnpMSURBM2dSaEFPaW1BeFZUbEZ4ZkRzTVBDbm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjgyNjQyODAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMzRENzlCREY0RDJDNUY4RUY4MDBEMENDNzg0RjZBMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MjgyNDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQW9ZRnpLS2RURDJ0cklNdjItRmZSQVwiLFxuICBcInBob25lSWRcIjogXCI2MjZjOTNlYS02YWFmLTRkNDItYmY3Yy01N2UyZmI4NzRjMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMjA5LFxuICAgICAgMjQxLFxuICAgICAgMTIwLFxuICAgICAgNzAsXG4gICAgICAxNDgsXG4gICAgICA0NCxcbiAgICAgIDIzNCxcbiAgICAgIDIyNixcbiAgICAgIDIxMixcbiAgICAgIDIzOSxcbiAgICAgIDE2MSxcbiAgICAgIDI0OCxcbiAgICAgIDIzOSxcbiAgICAgIDIsXG4gICAgICAxMTAsXG4gICAgICAxMTgsXG4gICAgICA1MixcbiAgICAgIDQ0LFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAyMjMsXG4gICAgICAyMjgsXG4gICAgICAxOTUsXG4gICAgICAxMDUsXG4gICAgICA0MSxcbiAgICAgIDIyOSxcbiAgICAgIDE5MyxcbiAgICAgIDkwLFxuICAgICAgMTcsXG4gICAgICA3MyxcbiAgICAgIDIxNSxcbiAgICAgIDM0LFxuICAgICAgMTc5LFxuICAgICAgMzAsXG4gICAgICA0NixcbiAgICAgIDE0OSxcbiAgICAgIDM3LFxuICAgICAgMTY1LFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllNRzlFVzhDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2ODI2NDI4MDI6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLCs3J1bGXii4ZicmVha2Vy2a3NnCDhtYPigbEgy6HhtZjhtY/htYPLolwiLFxuICAgIFwibGlkXCI6IFwiMjMwOTc5MjY0MzY0NzgyOjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uanB5NFFoSWVFdFFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicHlTeFlMcDM5OWx6NUF0MG9FQ0RPeHd0cGI5elExWWNnOVN1WGRVSW4wVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyaGJQVzBMZHp6V290a3EyWEpoTTU3L3NRWEdhM0phV3lDY29Sdk4vMG02WVI2dnFYT3JIaVNKK3JMaHZYcnVQU0JVMDdhQUZnbXR3a3FiU3k4Mk9BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyYTVqaDBNN1pyKzFuaUEvTzlHRlFiZDJsU3F4Q0syZlJGVm1RQlhrcDMycHJUYjNaSXpoR2ZEU3daOWhYQjh4OW55MmkyZkVDU2ZqMjhCeGYvazNnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2ODI2NDI4MDI6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODI4MjMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUdkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFR2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2TEt1WjNhVWpPd2pZeGJxc3ZNallOWEowRXdRaFludzFMTzRkNVVCb1JNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3MTIwNzQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
