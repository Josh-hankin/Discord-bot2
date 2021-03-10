const { notStrictEqual } = require('assert');
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',() =>{
    console.log('captcha is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'roast'){
        client.commands.get('roast').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }
    if (command === 'Trivia'){
        client.commands.get('Trivia').execute(bot, message, args, Discord)
    }
    });



client.login('ODE4OTY1NjA2NTMxMDcyMDIw.YEfvKA.ohPnB9XlTgfUj6wSTa8KRMoI1I8');
