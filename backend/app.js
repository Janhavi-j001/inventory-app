const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware to parse JSON payloads (GitHub sends application/json)
app.use(express.json());

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Handle root route (serves index.html)
app.get('/', (req, res) => {
    res.send('Inventory Management App is Running-- updated message');
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// ✅ Handle GitHub Webhook POST requests
app.post('/github-webhook/', (req, res) => {
    console.log('🔔 GitHub Webhook Received:', req.body);
    res.status(200).send('Webhook received successfully');
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
