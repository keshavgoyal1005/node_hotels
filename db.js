const mongoose = require('mongoose');

require('dotenv').config();
// Define the mongodb connection URL

// const mongoURL = 'mongodb://localhost:27017/hotels';
// const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
const mongoURL = process.env.MONGO_URL;


mongoose.connect(mongoURL, {
    useNewUrlParser: true, // default as of mongoose 5.7.0
    useUnifiedTopology: true, // default as of mongoose 5.7.0
    ssl: true,
    sslCA: fs.readFileSync('/path/to/ca-certificate.crt'), // CA certificate if using self-signed certificate
    serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds if server selection fails
});

const db = mongoose.connection;


db.on('connected', () => {
    console.log(`Connected to mongoDB Server,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`);
});
db.on('error', (error) => {
    console.log(`Error connecting to mongoDB Server:::::::::::::::::::::::::::::::::::::: ${error}`);
});
db.on('disconnected', () => {
    console.log(`Disconnected from mongoDB Server,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`);
});

module.exports = db;




