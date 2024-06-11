const express = require('express'); // Import Express framework
const http = require('http'); // Import HTTP module to create server
const socketIo = require('socket.io'); // Import Socket.io for real-time communication
const bodyParser = require('body-parser'); // Import body-parser to parse JSON bodies
const helmet = require('helmet'); // Import Helmet to enhance security
const basicAuth = require('express-basic-auth'); // Import express-basic-auth for basic authentication
const sqlite3 = require('sqlite3').verbose(); // Import SQLite and enable verbose mode for debugging

const app = express(); // Create an instance of Express
const server = http.createServer(app); // Create an HTTP server
const io = socketIo(server); // Attach Socket.io to the server

// Middleware setup
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON requests
app.use(helmet()); // Use Helmet middleware to secure Express apps by setting various HTTP headers
app.use(basicAuth({
    users: { 'admin': 'password' }, // Set up basic authentication with username 'admin' and password 'password'
    challenge: true // Enable challenge to prompt for username and password
}));

const PORT = process.env.PORT || 3000; // Define the port number, default to 3000 if not set in environment variables

// Connect to SQLite database
const db = new sqlite3.Database('iot_home_automation.db', (err) => {
    if (err) {
        console.error('Error opening database', err); // Log error if connection fails
    } else {
        console.log('Connected to SQLite database'); // Log success message if connected
        // Create devices table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS devices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            status TEXT
        )`);
    }
});

app.get('/', (req, res) => {
    res.send('IoT Home Automation System'); // Send a simple response for the root route
});

// API route to get all devices
app.get('/api/devices', (req, res) => {
    db.all('SELECT * FROM devices', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message }); // Send error response if query fails
            return;
        }
        res.json({ devices: rows }); // Send all device data as JSON response
    });
});

// API route to get a specific device by ID
app.get('/api/devices/:device_id', (req, res) => {
    const deviceId = req.params.device_id; // Extract device ID from URL parameter
    db.get('SELECT * FROM devices WHERE id = ?', [deviceId], (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message }); // Send error response if query fails
            return;
        }
        res.json(row); // Send the specific device data as JSON response
    });
});

// API route to send commands to devices
app.post('/api/commands', (req, res) => {
    const { deviceId, command } = req.body; // Extract deviceId and command from request body
    // Process command (this is a placeholder)
    res.json({ message: `Command ${command} sent to device ${deviceId}` }); // Send confirmation response
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Log message when server starts successfully
});

