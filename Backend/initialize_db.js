const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('iot_home_automation.db', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        db.serialize(() => {
            db.run('CREATE TABLE IF NOT EXISTS devices (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status TEXT)', (err) => {
                if (err) {
                    console.error('Error creating table', err);
                } else {
                    db.run('INSERT INTO devices (name, status) VALUES (?, ?)', ['Light', 'on']);
                    db.run('INSERT INTO devices (name, status) VALUES (?, ?)', ['Thermostat', 'off']);
                    console.log('Database initialized with sample data');
                }
            });
        });
    }
    db.close();
});

