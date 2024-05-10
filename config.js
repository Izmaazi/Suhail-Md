const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/mogadisho";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252682642802";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,252682642802";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

SUHAIL_00_58_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBY2J1a0N6UFNsMjhxLzRobmZpZlFDaERxTVV1aHFxR3orY0RLdUVqbWlvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiU0FYMkhkWFRudUhVU2dwemtJSU5RXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjYTM0YjU1LWFhMTUtNGZjMi1iNzUzLWQ2NzM2YmRjYzNkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICA1MSxcbiAgICAgIDIzOSxcbiAgICAgIDEsXG4gICAgICAxNDIsXG4gICAgICA4MCxcbiAgICAgIDIwNCxcbiAgICAgIDI0NCxcbiAgICAgIDIzNyxcbiAgICAgIDAsXG4gICAgICAyNyxcbiAgICAgIDMwLFxuICAgICAgMjgsXG4gICAgICAxMjksXG4gICAgICAyMDMsXG4gICAgICA2OSxcbiAgICAgIDI1MCxcbiAgICAgIDE0NCxcbiAgICAgIDE2NCxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICA3OCxcbiAgICAgIDIxMCxcbiAgICAgIDg0LFxuICAgICAgOTUsXG4gICAgICAxNDEsXG4gICAgICAxMDQsXG4gICAgICAxMTEsXG4gICAgICA4MCxcbiAgICAgIDE5LFxuICAgICAgOTEsXG4gICAgICA4NixcbiAgICAgIDIxOCxcbiAgICAgIDExMixcbiAgICAgIDU4LFxuICAgICAgMjcsXG4gICAgICAxMDIsXG4gICAgICA0NixcbiAgICAgIDY3LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5BUFY4VkpZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2ODI2NDI4MDI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLCs3J1bGXii4ZicmVha2Vy2a3NnCDigYJcIixcbiAgICBcImxpZFwiOiBcIjIzMDk3OTI2NDM2NDc4MjoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYmY2T0FERUpuaTliRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFMSC9lbjZ2ZWNZUWFpbGxIV2kxMlo1NTNvcTV4YmVzUFVSSEN2Zk9mZ2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNjZZSmk2dXJNOVRvd2ZsMFVzWE5YeEZKNXJIRXBlemhmNzE3enl6RVovZUxQeWJrYVdsSCt6eEpOK2R5eU5MOHJLVXMreUhuSDhpaUREYjA3QWQ1QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwickRSOHFVMEhJOGx2UTkwWXhHRE1pcUxzVGdrRTRzNHVGT2s4SUI1d290RExxcVZ5dE5QcVhJbzVtVmhGc3ZNVDZJR2ZjbmlYQ2ZOZ29aSk9leFg4anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjgyNjQyODAyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTUzMDI2ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFNytcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU3Ky5qc29uIjogIntcImtleURhdGFcIjpcIlcwS0N5LzdIa2xFMDJOK1JQajlmV05kZTlOZWtwVUorcDAyVmRXUkZxeWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwODM0OTE3MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=
global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "lukas ocampos",
  packname: process.env.PACK_NAME || "🖤",
  botname : process.env.BOT_NAME  || "rule breaker",
  ownername:process.env.OWNER_NAME|| "lukas ocampos",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

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
