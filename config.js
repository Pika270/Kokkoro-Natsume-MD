const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

global.available = process.env.AVAILABLE === 'true';
global.autoReadAll = process.env.AUTO_READ_ALL === 'true';
global.anticall = process.env.ANTICALL === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.groupevent = process.env.GROUP_EVENT === 'true';
global.autoreadpmngc = process.env.AUTOREAD_PM_GC === 'true';
global.autoReadGc = process.env.AUTO_READ_GC === 'true';
global.autoswview = process.env.AUTO_SW_VIEW === 'true';
global.maxWarnings = parseInt(process.env.MAX_WARNINGS) || 3;
global.antibadword = process.env.ANTIBADWORD === 'true';
global.autostatusReact = process.env.AUTOSTATUS_REACT === 'true';
global.antispam = process.env.ANTISPAM === 'true';
global.antidelete = process.env.ANTIDELETE === 'true';
global.autoreact = process.env.AUTOREACT === 'true';
global.autoReactMode = process.env.AUTO_REACT_MODE || 'dm';
global.chatbot = process.env.CHATBOT === 'true';
global.antilink = process.env.ANTILINK === 'true';
global.antibug = process.env.ANTIBUG === 'true';
global.autoGreet = process.env.AUTO_GREET === 'true';

global.author = process.env.AUTHOR || 'Unknown';
global.location = process.env.LOCATION || 'Nowhere';
global.botname = process.env.BOTNAME || 'Bot';
global.StatusReactEmoji = process.env.STATUS_REACT_EMOJI || '🍄';
global.ownernumber = process.env.OWNER_NUMBER ? [process.env.OWNER_NUMBER] : [];
global.ownername = process.env.OWNER_NAME || 'Owner';
global.prefix = process.env.PREFIX || '.';

global.mess = {
  group: "*👥 Group chats only!*\n*This command doesn't work in private chats.*",
  owner: "*🛑 Access denied!*\n*Only the bot owner can use this command.*",
  privates: "*📩 Private chats only!*\n*Use this command in DM/PM.*",
  admin: "*🛡️Admins only!*\n*You need admin privileges to use this command.*",
  botadmin: "*🤖 I need to be an admin first!*\n*Promote me to proceed.*",
  banned: "*🚫 You're banned from using this bot.*\n*Contact the owner if you think this is a mistake.*"
};

// Auto-reload config
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update detected in '${__filename}'`));
  delete require.cache[file];
  require(file);
});