require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});


client.on('messageCreate', (message) => {
  if(message.author.bot) {
    return;
  }

  const command = message.content.toLowerCase();
  if (command.includes('cyberpapu' || 'cyberpapus')) {
    message.reply(`me hablaban? jeje`);
  }
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'add') {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`La suma es ${num1 + num2}`)
  }

});

client.login(process.env.TOKEN);