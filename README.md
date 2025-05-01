# Skynet — Your Personal Discord Assistant 🤖

Skynet is a witty and responsive Discord bot that helps automate tasks, provide information, and serve as a digital sidekick — built using Node.js and deployed using Docker. It runs as a background worker and integrates with external APIs to provide rich, conversational responses.


## Table of Contents
- [What is Skynet?](https://github.com/anand-shete/Skynet/edit/main/README.md#skynet--your-personal-discord-assistant-)
- [Demo Link](https://github.com/anand-shete/Skynet/edit/main/README.md#demo-link)
- [Features of Skynet](https://github.com/anand-shete/Skynet/edit/main/README.md#-features)
- [Tech Stack](https://github.com/anand-shete/Skynet/edit/main/README.md#%EF%B8%8F-tech-stack)
- [Local Development](https://github.com/anand-shete/Skynet/edit/main/README.md#-local-development)
- [Production Deployment](https://github.com/anand-shete/Skynet/edit/main/README.md#-production-deployment)
- [Personality Config](https://github.com/anand-shete/Skynet/edit/main/README.md#-personality-config)
- [Security](https://github.com/anand-shete/Skynet/edit/main/README.md#-security)
- [Contributing](https://github.com/anand-shete/Skynet/edit/main/README.md#-contributing)
- [License](https://github.com/anand-shete/Skynet/edit/main/README.md#-license)


## Demo Link

Use this link to instantly join the Discord server to use Skynet: [Discord](https://discord.gg/ZDQfRSN3)

![Skynet Demo GIF](https://i.imgur.com/qEeu1cK.gif)


## 🧠 Features

- **Natural Language Interaction**: Engage users with witty, AI-powered responses using Google’s Gemini API.
- **Custom Commands**: Use custom commands like `/about` and `/ping` to interact with Skynet.
- **Dockerized Deployment**: Seamlessly deploy Skynet on any platform with Docker.
- **Configurable Personality**: Tune Skynet’s tone to be sarcastic, friendly, or professional.
- **Extensible**: Add new commands or integrations with minimal setup.

    
## 🛠️ Tech Stack

- **Runtime**: Node.js (v20)
- **Libraries**: `discord.js`, `dotenv`, `@google/genai`
- **Containerization**: Docker
- **Deployment**: Railway


## 💻 Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) v20 or higher
- A Discord server (create one if you don’t have one)
- A Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications)
  - Enable the Presence, Server Members, and Message Content privileged intents in the Bot section
  - Invite the bot to your server using the OAuth2 URL generated in the OAuth2 section
- A Gemini API key from [Google Cloud](https://console.cloud.google.com) for AI-powered features

  
### Setup Steps
1. Clone the repository
```bash
git clone https://github.com/your-username/skynet.git
cd skynet
```

2. Configure Environment
Create a `.env` file with required variables
```bash
DISCORD_BOT_TOKEN = your_DISCORD_BOT_TOKEN
CLIENT_ID = your_CLIENT_ID
GEMINI_API_KEY = your_GEMINI_API_KEY
```


3. Install the dependencies
```bash
npm install
```

4. Run the development server
```bash
npm run dev
```


## 📦 Production Deployment
1. Use the Dockerfile to build an image
```bash
docker build -t skynet .
```

2. Spin up a container in detatched mode
```bash
docker run --env-file .env -d skynet
```

## 🤖 Personality Config
Adjust these settings in the code to make Skynet more formal, humorous, or creative based on your server’s vibe!
```js
maxOutputTokens: 1500,
temperature: 0.5,
topP: 0.95,
topK: 40
```


## 🔐 Security
- Environment variables are ignored from the image and passed during runtime only.
- No sensitive info committed.
- Follows [12-factor app principles](https://12factor.net/) for scalable, secure deployments.



## 🙌 Contributing
Pull requests are welcome for improvements or feature suggestions. Please open an issue first to discuss what you’d like to change.



## 📄 License
This project is licensed under the [MIT License](LICENSE).