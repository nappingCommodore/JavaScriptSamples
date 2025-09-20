// Simple nodeJs example for streams for file read, write and socket

const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Only use JSON/body parsing for non-streaming routes — avoid parsing for write route so we can stream raw request bodies
app.use((req, res, next) => {
  // For the streaming write endpoint we want to keep the raw request body available to pipe into a write stream.
  // Skip body parsing for POST /write so we can stream the request directly.
  console.log("Parsing skip middleware invoked for", req.method, req.path);
  if (req.method === 'POST' && req.path === '/write') return next();
  express.json()(req, res, next);
});
app.use(express.urlencoded({ extended: true }));

// Serve a small demo client
app.use('/chat', express.static(path.join(__dirname, 'public')));

// List files in the data directory
app.get('/files', (req, res) => {
  const dir = path.join(__dirname, 'data');
  fs.mkdirSync(dir, { recursive: true });
  fs.readdir(dir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Unable to list files' });
    res.json({ files });
  });
});

// Stream a file to the response using a read stream
// GET /read/:msg?file=filename.txt
app.get('/read/:msg', (req, res) => {
  console.log("Read endpoint invoked with message:", req.params.msg);
  const filename = req.query.file || 'sample.txt';
  const filePath = path.resolve(__dirname, 'data', filename);

  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) return res.status(404).send('File not found');

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    readStream.on('error', (streamErr) => {
      console.error('Read stream error', streamErr);
      if (!res.headersSent) res.status(500).end('Read error');
    });

    // Pipe file stream directly to the HTTP response
    readStream.pipe(res);

    readStream.on('end', () => {
      console.log("File read complete");
      res.end();
    });
  });
});

// Stream incoming request body into a file using a write stream
// POST /write?file=filename.txt&append=true
app.post('/write', (req, res) => {
  console.log("Write endpoint invoked");
  const filename = req.query.file || 'output.txt';
  const append = req.query.append !== 'false';
  const dir = path.resolve(__dirname, 'data');
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, filename);
  const flags = append ? 'a' : 'w';

  const writeStream = fs.createWriteStream(filePath, { flags });

  writeStream.on('error', (err) => {
    console.error('Write stream error', err);
    if (!res.headersSent) res.status(500).end('Write error');
  });

  writeStream.on('finish', () => {
    res.json({ ok: true, file: filename });
  });

  // If client sent JSON and the body was parsed by an upstream middleware (it won't be for this route), write the JSON string.
  // Otherwise, pipe raw request stream into the file stream so large uploads can be handled efficiently.
  if (req.is('application/json') && req.body && Object.keys(req.body).length) {
    writeStream.write(JSON.stringify(req.body) + "\n");
    writeStream.end();
  } else {
    req.pipe(writeStream);
  }
});

// Simple health endpoint
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Socket.IO chat implementation
io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  // When a client sends a chat message, broadcast it to all clients (including sender)
  socket.on('chat message', (payload) => {
    const message = {
      id: socket.id,
      text: String(payload),
      time: new Date().toISOString(),
    };

    // Broadcast the message to everyone
    io.emit('chat message', message);
  });

  socket.on('disconnect', (reason) => {
    console.log('Socket disconnected:', socket.id, reason);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Streams example server listening on http://localhost:${PORT}`);
  console.log(`Chat client available at http://localhost:${PORT}/chat/chat.html`);
});
