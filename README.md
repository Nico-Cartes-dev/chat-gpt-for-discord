# Chat-GPT-for-Discord

This project allows you to integrate OpenAI's GPT-3.5 and gpt 4 model into Discord, enabling your Discord bot to engage in conversations with users using natural language processing. Below are the steps to set up and run the project.

## Setup

1. Clone this repository to your local machine.
2. Create a `.env` file in the root directory of the project.
3. Inside the `.env` file, provide your Discord bot token and OpenAI API key in the following format:

openai_api_key="YOUR_OPENAI_API_KEY"

discord_bot_token="YOUR_DISCORD_BOT_TOKEN"


4. Install the necessary dependencies using Node.js. Run the following commands in your terminal:

npm install discord.js

npm install openai

npm install --save-dev nodemon (for development)


## Running the Bot

### Development Mode

To run the bot in development mode with automatic server restarts, use the following command:
npm run dev

### Normal Mode

To run the bot in normal mode, simply use:

npm start


## Important Notes

- Node.js is required to run this project. If you haven't installed Node.js yet, you can find instructions [here](https://nodejs.org/).
- Keep in mind that the GPT-3.5 API has limitations on the number of queries. If you encounter any issues related to query limits, please contact the developer for assistance.
- This project is under ongoing development. If you have suggestions or enhancements to increase the number of queries or improve functionality, feel free to contribute or contact the developer.
- **To enable your bot to interact with you on Discord, create a channel and grant the bot access to read and send messages. For creating a bot, refer to [this page](https://discord.com/developers/docs/intro).**



## Contributions

Contributions to this project are welcome! If you have any ideas, suggestions, or improvements, please submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



