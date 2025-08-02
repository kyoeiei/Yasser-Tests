const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve exam.html for /exam route
app.get('/exam', (req, res) => {
    res.sendFile(path.join(__dirname, 'exam.html'));
});

// Serve results.html for /results route
app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, 'results.html'));
});

// Handle all other routes by serving index.html (for SPA-like behavior)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
}); 