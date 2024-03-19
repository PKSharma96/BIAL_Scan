const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to your backend server');
});

app.get('/login', (req, res) => {
    res.send('Login Succesfully');
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
