const express = require("express");
const app = express();


//Adding Urls for Promotions/Game
app.get('/group',(req,res)=>res.redirect("https://www.roblox.com/groups/12852480"))

//Removing File Extentions
app.get('/policy',(req,res)=>res.sendFile(__dirname + "/public/policy.html"))
app.get('/livestream',(req,res)=>res.sendFile(__dirname + "/public/livestream.html"))
app.get('/team',(req,res)=>res.sendFile(__dirname + "/public/team.html"))
app.get('/subscription',(req,res)=>res.sendFile(__dirname + "/public/subscription.html"))
app.get('/games',(req,res)=>res.sendFile(__dirname + "/public/games.html"))
app.get('/spotify',(req,res)=>res.sendFile(__dirname + "/public/spotify.html"))
app.get('/status',(req,res)=>res.sendFile(__dirname + "/public/status.html"))
app.get('/discordchat',(req,res)=>res.sendFile(__dirname + "/public/discordchat.html"))

//--Website Here--\\
//404 Webpage
app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/public/404.html")
});

app.listen(8080);