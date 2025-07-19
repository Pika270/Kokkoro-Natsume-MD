// Reusable helpers for reading & writing JSON with fs/promises.

const fs   = require('fs/promises');
const path = require('path');


async function loadJSON(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (_) {
    return {};         
  }
}

async function saveJSON(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

module.exports = { loadJSON, saveJSON };