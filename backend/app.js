const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Define the route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html')); // Serve index.html
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
