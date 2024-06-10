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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348076815336";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_33_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY0LFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIsXG4gICAgICAgIDk0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSmlKMnBFUW5QRVF2Wm1xZ3BRR0tuSm8vNHpSV2JoTFlHTHBzdHlIMzYxND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOUowZFBOcXNRSG1vdVZDN2VkbGVSZ1wiLFxuICBcInBob25lSWRcIjogXCIzODUwYzUzZi0wMjhkLTQ5ZjUtODE4OS0yMzlhODQwNzE3ZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMjE1LFxuICAgICAgODcsXG4gICAgICAyMzksXG4gICAgICAxMjgsXG4gICAgICAzNSxcbiAgICAgIDcxLFxuICAgICAgMTIxLFxuICAgICAgNjcsXG4gICAgICAyMDUsXG4gICAgICAxNTgsXG4gICAgICAxNjIsXG4gICAgICAxNyxcbiAgICAgIDM2LFxuICAgICAgNzQsXG4gICAgICAyMzcsXG4gICAgICAxMyxcbiAgICAgIDYsXG4gICAgICA3MyxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAyMixcbiAgICAgIDE5OCxcbiAgICAgIDgxLFxuICAgICAgMTk0LFxuICAgICAgNyxcbiAgICAgIDgwLFxuICAgICAgMTExLFxuICAgICAgMjI1LFxuICAgICAgMTY4LFxuICAgICAgNTMsXG4gICAgICA5OCxcbiAgICAgIDc2LFxuICAgICAgMTEzLFxuICAgICAgNzUsXG4gICAgICAyMjYsXG4gICAgICAxMDcsXG4gICAgICA5NSxcbiAgICAgIDIwMSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5QzhWU1cxNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3NjgxNTMzNjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzk0MzA3MjMzMDk2NjA6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRGUycjBERVB2eG5MTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFLS0hLOFdCNkg2YU1IcHh5ejZrcG1kdHV2UjVyS0xXTmlTeGtpL1pUVXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibUNkK1RlZXBOdkR4VzZJUlA2a1RlNktzbWRlYmx2ZFBlQW1FWnpwVnFKWVhaUlZWZlRCOS9MV3phR0JsbjlWN0Ezc0doczFmcmtMYWR4SWZ6cHY1QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUkFtNW42ZjFweE5hRkpsRFUvaXBDbFl2ZjZFZlg2VnlqOWFqOXUvaWZMYkhtVThteEZtSUVoKzd0SStOdDZIdlZmakprYXB2cGI3WGFnMzZKWWtsamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NjgxNTMzNjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODA0MDgzMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
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
