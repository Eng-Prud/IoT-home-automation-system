const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const basicAuth = require('express-basic-auth');
const connectDB = require('./db');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use(helmet());
app.use(basicAuth({
    users: { 'admin': 'password' },
    challenge: true
}));

const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

app.get('/', (req, res) => {
    res.send('IoT Home Automation System');
});

// API routes
app.get('/api/devices', (req, res) => {
    // Example data
    const devices = [
        { id: 1, name: 'Light', status: 'on' },
        { id: 2, name: 'Thermostat', status: 'off' },
    ];
    res.json(devices);
});

app.get('/api/devices/:device_id', (req, res) => {
    const deviceId = req.params.device_id;
    // Example data
    const device = { id: deviceId, name: 'Light', status: 'on' };
    res.json(device);
});

app.post('/api/commands', (req, res) => {
    const { deviceId, command } = req.body;
    // Process command (this is a placeholder)
    res.json({ message: `Command ${command} sent to device ${deviceId}` });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

