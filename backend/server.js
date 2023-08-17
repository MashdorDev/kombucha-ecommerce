const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to Kombucha E-commerce Backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});

