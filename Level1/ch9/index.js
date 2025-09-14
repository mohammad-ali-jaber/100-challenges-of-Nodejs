const { writeFile } = require('fs/promises');
const path = require('path');

async function main() {
  const filePath = path.join(__dirname, 'data.json');
  await writeFile(filePath, JSON.stringify({ ok: true }));
  console.log('File written successfully!');
  console.log("---------------------------------")
}
main().catch(console.error);