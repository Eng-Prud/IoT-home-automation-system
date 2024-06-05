const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const basicAuth = require('express-basic-auth');
const sqlite3 = require('sqlite3').verbose();

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

// Connect to SQLite database
const db = new sqlite3.Database('iot_home_automation.db', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Connected to SQLite database');
        db.run(`CREATE TABLE IF NOT EXISTS devices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            status TEXT
        )`);
    }
});

app.get('/', (req, res) => {
    res.send('IoT Home Automation System');
});

// API routes
app.get('/api/devices', (req, res) => {
    db.all('SELECT * FROM devices', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ devices: rows });
    });
});

app.get('/api/devices/:device_id', (req, res) => {
    const deviceId = req.params.device_id;
    db.get('SELECT * FROM devices WHERE id = ?', [deviceId], (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json(row);
    });
});

app.post('/api/commands', (req, res) => {
    const { deviceId, command } = req.body;
    // Process command (this is a placeholder)
    res.json({ message: `Command ${command} sent to device ${deviceId}` });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

