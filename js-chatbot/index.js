import openai from './config/openai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
  console.log(colors.bold.green('Welcome to Chatbot powered by ChatGPT!'));

  const userName = readlineSync.question('What is your name? ');
  console.log(
    `Hello ${userName}! You are all set to start the conversation with the bot.`
      .green
  );

  const chatHistory = []; // This is used to store chat history

  while (true) {
    const userInput = readlineSync.question(colors.magenta(`${userName}: `));

    try {
      // Construct messages by iterating over the chat history
      const messages = chatHistory.map(([role, content]) => ({
        role,
        content,
      }));

      // Add latest user input
      messages.push({ role: 'user', content: userInput });

      // Check if user wants to exit the chat
      if (userInput.toLowerCase() === 'exit') {
        console.log(colors.green(`'Bot: Goodbye ${userName}!`));
        return;
      }

      // Call API with user input
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
      });

      const completionText = completion.data.choices[0].message.content;
      console.log(colors.green('Bot: ' + completionText));

      // Update chat history with latest user input and bot response
      chatHistory.push(['user', userInput]);
      chatHistory.push(['assistant', completionText]);
    } catch (error) {
      console.error(colors.red(error));
    }
  }
}

main();
