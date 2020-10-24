module.exports = {
    name: 'squireCall',
    description: "This calls the squire for a greeting and a tip.",
    execute(message, args) {
        const squireGreetings = [
            "👋Greetings!",
            "👋Hello!",
            "😁Good day!",
            "😁How do you do!",
            "😃Salutations!",
            "😃What ho!",
            "👋I bid you hello!",
            "🍻Cheers!"
        ]
        const squireTips = [
            "I rolled a 6️⃣ today! I feel wonderful!",
            "I rolled a 1️⃣ today! I feel terrible!",
            "Tis' most splendid to serve all members of the party!",
            "By my troth, I will serve you!",
            "Blessings to thy rolls today!"
        ]
        const DidYouKnow = [
            "that Dwarves find mushrooms quite exqusite!",
            "dragons really hate spiders?",
            "that a Saytr's favorite hay is alfalfa?",
            "that Paco is a punk-ass bitch!?"
        ]

        var out = "";

        out += squireGreetings[Math.floor(Math.random() * squireGreetings.length)] + " ";

        var c1 = Math.floor(Math.random() * 2);
        
        // "Did you know..."
        if(c1 == 1) {
            out += "Did you know " + DidYouKnow[Math.floor(Math.random() * DidYouKnow.length)] + " ";
        }
        // Random tip
        else {
            out += squireTips[Math.floor(Math.random() * squireTips.length)] + " ";
        }

        message.channel.send(out);
    }
}