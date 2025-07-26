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
    res.json({ message: 'Hello World from Express.js!' });
});

app.listen(PORT_EXPRESS, () => {
    console.log(`Express server is running on http://localhost:${PORT_EXPRESS}`);
});
