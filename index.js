const express = require("express");
const app = express();

const publicPath = "/public"

//404 Webpage

//Adding Urls for Promotions/Game
app.get('/group',(req,res)=>res.redirect("https://www.roblox.com/groups/12852480"))


//Main Page
app.get('',(req,res)=>res.sendFile(__dirname + publicPath + "/index.html"))
app.get('/policy',(req,res)=>res.sendFile(__dirname + publicPath + "/policy.html"))
app.get('/livestream',(req,res)=>res.sendFile(__dirname + publicPath + "/livestream.html"))
app.get('/team',(req,res)=>res.sendFile(__dirname + publicPath + "/team.html"))
app.get('/subscription',(req,res)=>res.sendFile(__dirname + publicPath + "/subscription.html"))
app.get('/games/',(req,res)=>res.sendFile(__dirname + publicPath + "/games.html"))
app.get('/status',(req,res)=>res.sendFile(__dirname + publicPath + "/status.html"))
app.get('/discordchat',(req,res)=>res.sendFile(__dirname + publicPath + "/discordchat.html"))

//SubPaths For Games
app.get('/games/dropballs',(req,res)=>res.sendFile(__dirname + publicPath + "/games/dropballs.html"))

//Showcase
app.get('/showcase', (req,res)=>res.sendFile(__dirname + publicPath + "/showcase/showcase.html"))

//404 Webpage
app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + publicPath + "/404.html")
});

app.listen(8080);