const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { color } = require('./color');


function uncache(modulePath) {
    const resolved = require.resolve(modulePath);
    if (require.cache[resolved]) {
        delete require.cache[resolved];
    }
}

function nocache(modulePath, callback = () => {}) {
    const resolved = require.resolve(modulePath);

    console.log(
        chalk.bold.white('𝐌 𝐎 𝐃 𝐔 𝐋 𝐄'),
        color(`‘${modulePath}’ 𝐢𝐬 𝐮𝐩 𝐭𝐨 𝐝𝐚𝐭𝐞`, 'grey')
    );

    fs.watchFile(resolved, async () => {
        try {
            uncache(resolved);
            console.log(
                chalk.bold.yellow('⚙️ 𝐔𝐏𝐃𝐀𝐓𝐄𝐃'),
                color(`‘${modulePath}’ 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐑𝐄𝐒𝐄𝐓 🛠️`, 'green')
            );
            callback(modulePath);
        } catch (err) {
            console.error(
                chalk.bold.red('⛔ 𝐄𝐑𝐑𝐎𝐑'),
                color(`𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐫𝐞𝐥𝐨𝐚𝐝 ‘${modulePath}’: ${err.message}`, 'red')
            );
        }
    });
}

module.exports = { uncache, nocache };