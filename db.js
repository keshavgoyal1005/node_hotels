const mongoose = require('mongoose');

// Define the mongodb connection URL

// const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';


mongoose.connect(mongoURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true ,
    serverSelectionTimeoutMS: 5000 
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




