const { Client, MessageEmbed } = require('discord.js');

const client = new Client({ intents: 32767 });

const PREFIX = '!';

client.once('ready', () => {
    console.log('Din BOT er nu klar til brug.');
});

client.on('messageCreate', async (message) => {
    console.log(message.content);
    let args = message.content.substring(1).split(" ");

    switch (args[0]) {
        case ('udvikling'):
            const Embed = new MessageEmbed()
                .setTitle('KL - BOT')
                .setColor(000000)
                .setAuthor('Karamel')
                .setTitle('B.O.T')
                .setDescription("Kontakt en Developer for at få hjælp til udvikling");

            message.channel.send({ embeds: [Embed] });
            break;
        case ('support'):
            const support = new MessageEmbed()
                .setTitle('KL - BOT')
                .setColor(000000)
                .setAuthor('Karamel')
                .setTitle('B.O.T')
                .setDescription("Du er har tilkaldt en staff, vent venligst! ?");

            message.channel.send({ embeds: [support] });
            break;
        case ('test'):
            const test = new MessageEmbed()
                .setTitle('KL - BOT')
                .setColor(000000)
                .setAuthor('Karamel')
                .setTitle('B.O.T')
                .setDescription("Du er har tilkaldt en staff, vent venligst! ?");

            message.channel.send({ embeds: [test] });
            break;
    }
});

client.login(require('./token.json'));

