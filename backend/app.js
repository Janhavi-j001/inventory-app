const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Inventory Management App is Running-- updated message');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
