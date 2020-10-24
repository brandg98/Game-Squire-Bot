module.exports = {
    name: 'proclaim',
    description: "This command makes Game Squire give a royal introduction to a proclamation.",
    execute(message, args) {
        message.delete();
        message.channel.send(`📯📯📯📯📯`);
        message.channel.send("HEAR YE! HEAR YE! " + "@everyone");
        message.channel.send(`${message.author} has a royal proclamation to make:`);
    }
}