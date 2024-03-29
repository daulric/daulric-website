//WebServer Here

const express = require("express");
const app = express();

const publicPath = "/public"

//404 Webpage

//Adding Urls for Promotions/Game
app.get('/group',(req,res)=>res.redirect("https://www.roblox.com/groups/12852480"))
app.get('/premium',(req,res)=>res.redirect("https://www.roblox.com/game-pass/24968083/RoNetwork-Premium"))
app.get('/newsite', (req, res)=>res.redirect("https://rocorestudio.tk"))


//Main Page
app.get('',(req,res)=>res.sendFile(__dirname + publicPath + "/index.html"))
app.get('/policy',(req,res)=>res.sendFile(__dirname + publicPath + "/policy.html"))
app.get('/livestream',(req,res)=>res.sendFile(__dirname + publicPath + "/livestream.html"))
app.get('/about',(req,res)=>res.sendFile(__dirname + publicPath + "/about/about.html"))
app.get('/subscription',(req,res)=>res.sendFile(__dirname + publicPath + "/subscription.html"))
app.get('/games/',(req,res)=>res.sendFile(__dirname + publicPath + "/games.html"))
app.get('/status',(req,res)=>res.sendFile(__dirname + publicPath + "/status.html"))
app.get('/discordchat',(req,res)=>res.sendFile(__dirname + publicPath + "/discordchat.html"))

//SubPaths For Games
app.get('/games/dropballs',(req,res)=>res.sendFile(__dirname + publicPath + "/games/dropballs.html"))

//About
app.get('/about/@ulric', (req,res)=>res.sendFile(__dirname + publicPath + "/about/ulric.html"))

//Forum
app.get('/forum', (req,res)=>res.redirect("https://forum.ronetwork.tk"))

// Zoom Codes
app.get('/classcodes', (req, res)=>res.sendFile(__dirname + publicPath + '/school/schoollinks.html'))


//404 Webpage
app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + publicPath + "/404.html")
});

app.listen(8080);