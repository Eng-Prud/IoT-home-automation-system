// Import the sqlite3 module and enable verbose mode for detailed error messages
const sqlite3 = require('sqlite3').verbose();

// Open a connection to the SQLite database named 'iot_home_automation.db'
const db = new sqlite3.Database('iot_home_automation.db', (err) => {
    if (err) {
        // Log an error message if there's an issue opening the database
        console.error('Error opening database', err);
    } else {
        // Serialize database operations to ensure they are executed in order
        db.serialize(() => {
            // Create a table named 'devices' if it doesn't already exist
            db.run('CREATE TABLE IF NOT EXISTS devices (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status TEXT)', (err) => {
                if (err) {
                    // Log an error message if there's an issue creating the table
                    console.error('Error creating table', err);
                } else {
                    // Insert sample data into the 'devices' table
                    db.run('INSERT INTO devices (name, status) VALUES (?, ?)', ['Light', 'on']);
                    db.run('INSERT INTO devices (name, status) VALUES (?, ?)', ['Thermostat', 'off']);
                    // Log a message indicating the database was initialized with sample data
                    console.log('Database initialized with sample data');
                }
            });
        });
    }
    // Close the database connection
    db.close();
});

