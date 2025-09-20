#!/usr/bin/env node
// generateSampleJson.js
// Usage: node generateSampleJson.js --out=./data/sample.json --records=1000 --payloadRepeat=100
// This script streams a large JSON file to disk without building the entire file in memory.

const fs = require('fs');
const path = require('path');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { out: path.join(__dirname, 'data', 'sample.json'), records: 1000, payloadRepeat: 100 };
  args.forEach(arg => {
    const m = arg.match(/^--([^=]+)=?(.*)$/);
    if (!m) return;
    const [, key, value] = m;
    if (key === 'out') opts.out = path.isAbsolute(value) ? value : path.join(__dirname, value);
    if (key === 'records') opts.records = Number(value) || opts.records;
    if (key === 'payloadRepeat') opts.payloadRepeat = Number(value) || opts.payloadRepeat;
  });
  return opts;
}

function pad(n, width = 4) {
  return String(n).padStart(width, '0');
}

(async function main(){
  const opts = parseArgs();
  const outDir = path.dirname(opts.out);
  fs.mkdirSync(outDir, { recursive: true });

  const ws = fs.createWriteStream(opts.out, { encoding: 'utf8' });
  const chunk = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. ';

  ws.write('{"generatedAt":"' + new Date().toISOString() + '","recordCount":' + opts.records + ',"records":[');

  for (let i = 0; i < opts.records; i++) {
    const id = i + 1;
    const name = 'Record ' + pad(id, 4);
    const email = 'user' + pad(id, 4) + '@example.com';

    // Begin object
    ws.write('{"id":' + id + ',"name":' + JSON.stringify(name) + ',"email":' + JSON.stringify(email) + ',"payload":"');

    // Stream the payload by writing the chunk repeatedly (we escape any unavoidable characters via JSON.stringify for the chunk)
    // chunk doesn't contain double quotes or backslashes, so it's safe to write directly.
    for (let r = 0; r < opts.payloadRepeat; r++) {
      ws.write(chunk.replace(/\r|\n/g, ' '));
    }

    // Close payload and object
    ws.write('"}');

    // Add comma unless it's the last record
    if (i < opts.records - 1) ws.write(',');

    // Flush occasionally to avoid buffering too much in memory (Node handles internal buffering; this is a hint)
    // Note: write() returns false to signal backpressure; if it happens we'd ideally wait for 'drain' event.
    if ((i & 0x3FF) === 0) {
      await new Promise(resolve => setImmediate(resolve));
    }
  }

  // Close array and object
  ws.write(']}');

  ws.end(() => {
    console.log('Generated:', opts.out);
    console.log('Records:', opts.records);
    console.log('Payload repetitions per record:', opts.payloadRepeat);
  });

  ws.on('error', (err) => {
    console.error('Write error:', err);
    process.exit(1);
  });
})();
