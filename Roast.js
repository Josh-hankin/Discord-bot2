module.exports = {
    name: 'roast',
    description: "this is a roast command!",
    execute(message, args){
        var x = Math.floor((Math.random() * 2) + 1);
        if (x == 1){ 
        message.channel.send(`${message.author} You're as useless as the 'ueue' in 'queue'!`);
    }
        else {
        message.channel.send(`${message.author} You sound unemployed!`)
    }
    }, 

}
