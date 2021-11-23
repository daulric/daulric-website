const express = require("express");
const app = express();

const publicPath = "/public"
const adminPath = "/admin"

//Adding Urls for Promotions/Game
app.get('/group',(req,res)=>res.redirect("https://www.roblox.com/groups/12852480"))


//Removing File Extentions
app.get('/policy',(req,res)=>res.sendFile(__dirname + publicPath + "/policy.html"))
app.get('/livestream',(req,res)=>res.sendFile(__dirname + publicPath + "/livestream.html"))
app.get('/team',(req,res)=>res.sendFile(__dirname + publicPath + "/team.html"))
app.get('/subscription',(req,res)=>res.sendFile(__dirname + publicPath + "/subscription.html"))
app.get('/games',(req,res)=>res.sendFile(__dirname + publicPath + "/games.html"))
app.get('/spotify',(req,res)=>res.sendFile(__dirname + publicPath + "/spotify.html"))
app.get('/status',(req,res)=>res.sendFile(__dirname + publicPath + "/status.html"))
app.get('/discordchat',(req,res)=>res.sendFile(__dirname + publicPath + "/discordchat.html"))
////////////////////////////////////////////////////////

//404 Webpage
app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + publicPath + "/404.html")
});

app.listen(8080);