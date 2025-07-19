require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');
// ⚙️ Auto Configuration Flags (Boolean)
// These values are loaded from the .env file. If not explicitly set, they default to `false`.
// 🔒 WARNING: Do not modify these unless you fully understand their purpose.
// 💡 Use the bot commands (e.g., `.autotyping on`) to toggle these features safely.
global.available = process.env.AVAILABLE === 'true';
global.autoReadAll = process.env.AUTO_READ_ALL === 'true';
global.anticall = process.env.ANTICALL === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.groupevent = process.env.GROUP_EVENT === 'true';
global.autoreadpmngc = process.env.AUTO_READ_PM_NGC === 'true';
global.autoReadGc = process.env.AUTO_READ_MESSAGES === 'true';
global.antiswview = process.env.AUTO_VIEW_STATUS === 'true';
global.autostatusReact = process.env.AUTO_STATUS_REACT === 'true';
global.antidelete = process.env.ANTIDELETE === 'true';
global.autoreact = process.env.AUTO_REACT === 'true';
global.chatbot = process.env.CHATBOT === 'true';
global.antilink = process.env.ANTI_LINK === 'true';
global.welcome = process.env.WELCOME === 'true';
global.autobio = process.env.AUTO_BIO === 'true';

// Other configurations with their defaults
global.maxWarnings = parseInt(process.env.MAX_WARNINGS) || 3;
global.autoReactMode = process.env.AUTO_REACT_MODE || 'off';
global.autoreply = process.env.AUTO_REPLY || 'off';
global.autobioInterval = process.env.AUTO_BIO_INTERVAL || null;
global.author = process.env.AUTHOR || '';
global.location = process.env.LOCATION || '';
global.botname = process.env.BOT_NAME || '';
global.StatusReactEmoji = process.env.STATUS_REACT_EMOJI || "🐿️";
global.ownername = process.env.OWNER_NAME || "꧁ঔৣ☬✞_𝕳𝖀__𝕴𝕱𝕴_𝕰__✞☬ঔৣ꧂";
global.ownernumber = process.env.OWNER_NUMBER || "2347079059033";
global.prefix = process.env.PREFIX || '.';

// Messages
global.mess = {
    group: "*👥 Group chats only!*\n*This command doesn't work in private chats.*",
    owner: "*🛑 Access denied!*\n*Only the bot owner can use this command.*",
    privates: "*📩 Private chats only!*\n*Use this command in DM/PM.*",
    admin: "*🛡️Admins only!*\n*You need admin privileges to use this command.*",
    botadmin: "*🤖 I need to be an admin first!*\n*Promote me to proceed.*",
    banned: "*🚫 You're banned from using this bot.*\n*Contact the owner if you think this is a mistake.*"
};

// Auto-reload config on file update
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update detected in '${__filename}'`));
    delete require.cache[file];
    require(file);
});