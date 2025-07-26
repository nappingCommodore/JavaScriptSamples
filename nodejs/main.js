// A GET endpoint to return a simple JSON response in express nodejs
const express = require('express');
const cors = require('cors');
const app = express();
const PORT_EXPRESS = 3000;

// CORS enablement 
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello World from Express.js!' });
});

app.listen(PORT_EXPRESS, () => {
    console.log(`Express server is running on http://localhost:${PORT_EXPRESS}`);
});
