const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+ssuhail:suhail@cluster0.cu90etc.mongodb.net/?retryWrites=true&w=majorityrv://
  "
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/829a65be73efa066d8293.jpg=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252614950726";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_44_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMCxcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NixcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia3IzVnB5SzFHYnpZMDQ0NkJsWkxhWW1vYm00NUNLeHg2bUVFSVhsa3VzWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNmlLTnoxY0tSSGFXZ0JYZWhzdThjUVwiLFxuICBcInBob25lSWRcIjogXCJkMjc2NmUzNS0xNmQ2LTQwN2YtYmRhYy1kODI3ZDNlOGZmMzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAyNDgsXG4gICAgICA4NixcbiAgICAgIDIzMSxcbiAgICAgIDE2LFxuICAgICAgNDUsXG4gICAgICA4NCxcbiAgICAgIDg0LFxuICAgICAgOTIsXG4gICAgICAxNzAsXG4gICAgICA1NyxcbiAgICAgIDE0NSxcbiAgICAgIDk4LFxuICAgICAgMjUwLFxuICAgICAgMTA0LFxuICAgICAgMTc0LFxuICAgICAgMTE5LFxuICAgICAgMTkxLFxuICAgICAgMTc0LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTI2LFxuICAgICAgMjEzLFxuICAgICAgNjYsXG4gICAgICA4NCxcbiAgICAgIDE3NSxcbiAgICAgIDE5NCxcbiAgICAgIDEwMCxcbiAgICAgIDQ4LFxuICAgICAgMTY4LFxuICAgICAgMjAzLFxuICAgICAgMTg1LFxuICAgICAgMjI2LFxuICAgICAgMjM4LFxuICAgICAgMTY3LFxuICAgICAgMTEwLFxuICAgICAgNTAsXG4gICAgICAyNDAsXG4gICAgICA3NixcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGN0c0QzFMNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjE0OTUwNzI2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bSAypzhtI3htIfhtJvhtJsg4bSAypnhtJzhtJzhtIvhtIDKgCDhtI3htI/KnOG0gOG0jeG0h+G0m+G0m1wiLFxuICAgIFwibGlkXCI6IFwiMjgwOTUxNDI2OTI4ODg3OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092dXZLa0RFSUhUdnJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTzNhSFVHTzhjTXRtdFpVaTFHREhSZk9sanBBVlVSc01XZlVRMzNMZ0dDUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUaXNUVmN0UDVIOGVHR3VIc0ZFVk1FWFFLSkQ0VTZERktucmFTWU5Nb0ZLZ3JmSGdrNFhhOXFDcUlVazF0ZWcxSTBJZ1ZEYUF2QzJoc2VVUEVWQ3JBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwdllsQXBjMm00WEFtSjgvNGs0YSt1RTBGTTVvdkNiWDVybnBGWWFHL1o0QmluaWVocTEwVUlVYXFDbm5yMXpOWC9PaVA1MUw3WW1wbUwxb1p6S0NDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2MTQ5NTA3MjY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjkxMDc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHF5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEcXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkeGNKbFkzK2dONUljTWcyNlMxVnNORWxwZ0lCajg0b0REWUtiR1JtZko0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg5MjI4NjgyMixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "lukas",
  packname: process.env.PACK_NAME || "lukas md",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ahmett deligh",


  errorChat : process.env.ERROR_CHAT || "252614950726",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
