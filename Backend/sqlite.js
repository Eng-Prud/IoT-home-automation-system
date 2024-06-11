const sqlite3 = require('sqlite3').verbose();

// Create and connect to the SQLite database
const connectDB = () => {
    // Create a new database object
    const db = new sqlite3.Database('iot_home_automation.db', (err) => {
        if (err) {
            // Log any errors that occur during the connection attempt
            console.error('Could not connect to the database', err);
        } else {
            // Log a message to the console if the connection is successful
            console.log('Connected to the SQLite database.');
        }
    });

    // Return the database object for further use
    return db;
};

// Export the connectDB function so it can be used in other parts of the application
module.exports = connectDB;

