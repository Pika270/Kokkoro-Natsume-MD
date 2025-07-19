const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
require('dotenv').config();

const sessionId = process.env.SESSION_ID;

if (sessionId && sessionId.trim() !== '') {
  console.log(chalk.green('🔁 SESSION_ID detected. Redirecting...'));
} else {
  console.log(chalk.yellow('📡 No SESSION_ID found. Switching to pair code method...'));
}
const redirectTarget = sessionId && sessionId.trim() !== '' ? './connect2.js' : './connect.js';

require(path.resolve(__dirname, redirectTarget));