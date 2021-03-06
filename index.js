const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
    token: "bot_token",
prefix: "bot_prefix",
mobile: true, //True or false

intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.onMessage() //Allows to execute Commands

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

/*
bot.cmd is object of Collections where the command data will be stored
"./commands/" is the path of folder where all the commands' code will be present
*/

bot.status({
    text: "$serverCount servers!",
    type: "WATCHING",
    time: 12
})

bot.status({
  text: "TEXT",
  type: "PLAYING", //can be PLAYING, WATCHING, LISTENING, STREAMING, COMPETING
  status: "idle", //can be online, idle, dnd, offline
  time: 12
})

bot.status({
text: "TEXT", 
type: "STREAMING", 
url: "URL"
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
