// A GET endpoint to return a simple JSON response in express nodejs
const express = require('express');
const cors = require('cors');
const app = express();
const PORT_EXPRESS = 3000;

// CORS enablement 
app.use(cors(
    // {
    //     origin: 'http://localhost:3000', // Allow requests from this origin
    //     methods: ['GET', 'POST'], // Allow these HTTP methods
    //     allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
    // }
));

app.get('/api', (req, res) => {
    console.log(req);
    res.json({ message: 'Hello World from Express.js!' });
});

app.get('/readFile', (req, res) => {
    console.log("Hello from readFile endpoint");
    const fs = require('fs');
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read file' });
            return;
        }
        console.log("inside readFile callback");
        res.json({ content: data });
    });
    console.log("File read operation completed.");
});

app.listen(PORT_EXPRESS, () => {
    console.log(`Express server is running on http://localhost:${PORT_EXPRESS}`);
});
