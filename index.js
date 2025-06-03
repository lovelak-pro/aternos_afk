const mineflayer = require("mineflayer");
const fs = require("fs");

// Load config
const config = JSON.parse(fs.readFileSync("config.json", "utf8"));

// Create the bot
const bot = mineflayer.createBot({
  host: config.ip,
  port: config.port,
  username: config.name,
  version: config.version, // <-- set your server version here
});

// Log connection
bot.on("login", () => {
  console.log(`[AFK BOT] Logged in as ${bot.username}`);
});

// Random movement to stay AFK
function randomMove() {
  if (!bot.entity) return;
  // Randomly look around
  const yaw = Math.random() * Math.PI * 2;
  const pitch = ((Math.random() - 0.5) * Math.PI) / 2;
  bot.look(yaw, pitch, true);

  // Randomly walk or stop
  const actions = ["forward", "back", "left", "right"];
  actions.forEach((action) => bot.setControlState(action, false));
  if (Math.random() > 0.5) {
    const action = actions[Math.floor(Math.random() * actions.length)];
    bot.setControlState(action, true);
    setTimeout(
      () => bot.setControlState(action, false),
      1000 + Math.random() * 2000
    );
  }
}

// Move every 5-10 seconds
setInterval(randomMove, 5000 + Math.random() * 5000);

// Reconnect on kick or end
function reconnect() {
  console.log("[AFK BOT] Disconnected, reconnecting in 5s...");
  setTimeout(() => {
    process.exit(1); // Let a process manager or script restart the bot
  }, 5000);
}
bot.on("end", reconnect);
bot.on("kicked", reconnect);
bot.on("error", (err) => console.log("[AFK BOT] Error:", err));

// Optional: keep-alive web server for Replit/Heroku
try {
  require("./keep_alive");
} catch (e) {}
