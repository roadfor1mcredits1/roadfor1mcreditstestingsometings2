var ServerID = "502892621048578048"; //اي دي السيرفر
var ChannelID = "502893041967824906";// اي دي الروم

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '3';

client.on('warn', console.warn);

client.on('error', console.error);
// Codes server - !.Zeyad' , ♚Roýale#5555


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Zeyad,Royale','\n','ProBot credits miner is ready!'));// Codes Server` - iiZeyad , Roýale"1.5k 🍷#1111

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));// Codes server - !.Zeyad' , ♚Roýale#5555


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(72).substring(14)) // Codes server - !.Zeyad' , ♚Roýale#5555


    });
}

var timer = setTimeout(timerFunc, 50);



   
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

client.on('ready', () => {
    client.channels.get("501724859705851908").join();
    }); 



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
