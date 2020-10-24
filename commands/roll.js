module.exports = {
    name: 'roll',
    description: "This executes a roll",
    execute(message, args) {

        // If no arguments given, roll 1d20
        if(args[0] == null) {
            var num = 1;
            var die = 20;
        }
        // Parse dice arguments
        else {
            var roll = args[0].toLowerCase().split("d");
            var num = parseInt(roll[0]);
            var die = parseInt(roll[1]);
        }

        // Initiate roll total and out string
        var total = 0;
        var out = "";

        var diceRoll;
        // Roll each dice, add it to total and concat to out
        for(var i = 0; i < num - 1; i++) {
            diceRoll = Math.floor(Math.random() * die) + 1;
            total += diceRoll;
            out += "[" + diceRoll + "] + ";
        }

        // Roll last dice
        diceRoll = Math.floor(Math.random() * die) + 1;
        total += diceRoll;
        out += "[" + diceRoll + "]";
        
        // Do not print total if there is only one die
        if(num > 1) {
            out += " = [" + total + "]";
        }

        if(num < 0 || die < 0) {
            message.channel.send('🎲I cannot roll negative numbers!');
        }
        else if(num == 0 || die < 0) {
            message.channel.send('🎲I cannot roll 0 dice!');
        }
        else {
            message.channel.send(`🎲${message.author} rolled ${num}d${die}:`);
            message.channel.send(`${out}`);
        }
        
        message.delete();
    }
}