let questions = [
    {
        title: "capital of England",
        answer: "London"
    }
];
module.exports = {
    name: 'Trivia',
    description: "Test your knowledge!",
    category:"fun",
    run: async(bot, message, args, Discord)=>{
        
        var input = args[0];
        
        const Embed = new Discord.MessageEmbed()
        .setTitle(q.title)
        .setDescription(input)
        .setColor(`GREEN`)
        .setFooter(`Reply to this message with the correct question number! You have 15 seconds.`)
        message.channel.send(Embed)

            let msgs = await message.channel.awaitmessages(u2=>u2.author.id===message.author.id,{time: 15000, max: 1, errors:["time"]})
            if(parseInt(msgs.first().content)==q.correct){
                return message.channel.send(`${message.author} You got it correct!`)
            }else{
                return message.channel.send(`${message.author} You got it incorrect!`)
            }
        }
    }
