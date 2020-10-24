const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '~';
const fs = require('fs');

client.commands = new Discord.Collection();

// Bring in commands 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Game Squire is online!');
});

var proclaimer;
var proclaimNow = false;
client.on('message', message => {
    if(message.author.bot) return;

    if(proclaimNow) {
        if(message.author != proclaimer) {
            message.delete();
        }
        else {
            proclaimNow = false;
        }
    }
    else{

        // Check if "Squire!" is called
        if(message.content.toLowerCase() === "squire!") {
            client.commands.get('squireCall').execute(message);
        }

        // Check if command is being issued
        if(!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).split(" ");
        const command = args.shift().toLowerCase();

        if(command == 'proclaim') {
            proclaimer = message.author;
            proclaimNow = true;
            client.commands.get('proclaim').execute(message, args);
        }
        else if(command == 'roll') {
            client.commands.get('roll').execute(message, args);
        }
        
    }
});

// Last line
client.login('NzY3MTQ4Mzg5NjA2NzUyMjc2.X4tsnQ.cLpzOH8lLEcV-0sUcoP7niCvuok');