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
global.gurl  =process.env.GURL  || "https://wa.me/message/E3WLNO4GSPOHA1";
global.website=process.env.GURL || "https://wa.me/message/E3WLNO4GSPOHA1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162195613";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_45_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDc1LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAwLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDczLFxuICAgICAgICAyMzksXG4gICAgICAgIDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkYm9GQVhVOXlsNVhseEYydXFPYWlmdlEzV3I0NlJrb2Y5L0VLWGd6aHgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMjg5NzM5NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRjgyRDZFMzQyNEVCQkRFRjRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM3MDc0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMjg5NzM5NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRkVEMDkyQ0MxRkFBRUMwN0JEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM3MDc1MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsWU93MTVYLVJZYW5JSXZUXzRJb0dnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY3ZjRmNzkzLWIzZGQtNGVkYS04NjEwLWY0NjhmZmUyYzcyMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICA2NyxcbiAgICAgIDIxMSxcbiAgICAgIDIzNSxcbiAgICAgIDI1MSxcbiAgICAgIDEzNCxcbiAgICAgIDExNixcbiAgICAgIDI0NixcbiAgICAgIDIyMCxcbiAgICAgIDEzMCxcbiAgICAgIDIzLFxuICAgICAgMjUsXG4gICAgICA0NyxcbiAgICAgIDEzNSxcbiAgICAgIDIyMyxcbiAgICAgIDc1LFxuICAgICAgNCxcbiAgICAgIDIxNixcbiAgICAgIDE4MCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDU2LFxuICAgICAgMjI0LFxuICAgICAgNzIsXG4gICAgICAyNDEsXG4gICAgICAyMjgsXG4gICAgICAzMixcbiAgICAgIDIxNSxcbiAgICAgIDI1MixcbiAgICAgIDE5MixcbiAgICAgIDEyNCxcbiAgICAgIDIwNyxcbiAgICAgIDE0MixcbiAgICAgIDE3LFxuICAgICAgNjYsXG4gICAgICA3OSxcbiAgICAgIDk1LFxuICAgICAgNDIsXG4gICAgICAyMjQsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyMzc0UERXTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyODk3Mzk2Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU0FfSk5SXCIsXG4gICAgXCJsaWRcIjogXCIyNjcxMDQwMTYxNzkzNTc6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZTQxZVVKRUxhTXE3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdDOXpFRmNxVG5jMDFsR2UrSkJ1UEtXOSt5cmh0bHlkNXpSUFJydXc3Rzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieEVQbVdaTW4xUUk0SUtoYUZUNEFaMzdnbHpqV3FZVEVlbnE5NkpONHFZNGFyUGE3SFpGUDV3OGdRNllEWENidGZoOGFZZXBjQjErYmtlbDRua3pJQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOElMSHJ1bUcvdnJCbkszZUloWHhyOC8wTHRTTUttWUVxUFg1d3VscE0rY1VpaHlNQmpEVkxPa2g1NVNkaDNoWkMzbXV0VEFZNFJTQnpIV0RuMzdURHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyODk3Mzk2Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNzA3NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFISU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhJTi5qc29uIjogIntcImtleURhdGFcIjpcIlV1emtiQUc2UUdjODdFcENuVVJ5SllFajFHK3dabjk0TVJVcHpPVERwbVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjYyOTEzMTMzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMzcwNzQ2MTc1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "garri-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "garri",


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
                                                 
