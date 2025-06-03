# Aternos AFK Bot

This is an easy-to-use AFK bot made for Minecraft Java Edition servers on Aternos. Just set it up and let it join your server it’ll move around automatically to keep your server online, so you don’t have to worry about getting kicked for being AFK.

---

## Features

- **Easy setup:** Just edit a config file and run!
- **Random movement:** The bot moves and looks around to avoid AFK kicks.
- **Automatic reconnect:** If disconnected, the bot will try to reconnect after 5 seconds.
- **Keep-alive web server:** Optional web server for platforms like Replit/Heroku.
- **No main account risk:** Use any alternate or offline Minecraft account.

---

## Requirements

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- An Aternos Minecraft Java server (get your server IP and port from the Aternos dashboard)

---

## Installation

1. **Download or Clone the Repository**

   ```sh
   git clone https://github.com/lovelak-pro/aternos_afk_bot.git
   cd aternos_afk_bot
   ```

---

## Configuration

Before running the bot, you need to set up the `config.json` file with your server details.  
Here’s how your `config.json` should look:

```json
{
  "ip": "your-server.aternos.me",
  "port": 12345,
  "name": "YourBotName",
  "version": "1.21.4"
}
```
