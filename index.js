const { Client, GatewayIntentBits } = require('discord.js');
const { OpenAI } = require('openai');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

const openaiApiKey = process.env.OPENAI_API_KEY;
const openaiClient = new OpenAI(openaiApiKey);

client.on('ready', () => {
    console.log("Bot listo");
    client.user.setActivity('preparando mi vida');
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    const input = message.content;
    try {
        const response = await openaiClient.completions.create({
            model: 'gpt-3.5-turbo', 
            prompt: input,
            max_tokens: 100
        });

        message.channel.send(response.choices[0].text);
    } catch (error) {
        console.error('Error al llamar a la API de OpenAI:', error);
        message.channel.send('Lo siento, ocurrió un error al procesar tu solicitud. Detalles del error: ' + error.message);
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
