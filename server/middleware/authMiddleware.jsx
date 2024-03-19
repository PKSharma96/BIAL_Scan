const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

const authMiddleware = async (req, res, next) => {
    // Check if token exists in request headers
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded; // Set decoded user data to request object
        next(); // Call next() to pass control to the next middleware or route handler
    });
};

// Usage example:
app.get('/protected-route', authenticate, (req, res) => {
    // Only authenticated users can access this route
    res.json({ message: 'Protected route accessed successfully', user: req.user });
});

module.exports = authMiddleware;
