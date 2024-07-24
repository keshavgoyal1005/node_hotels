const mongoose = require('mongoose');

require('dotenv').config();
// Define the mongodb connection URL

// const mongoURL = 'mongodb://localhost:27017/hotels';
// const mongoURL = 'mongodb+srv://goyalkeshav1005:keshav1005@cluster0.nytnogd.mongodb.net/';
const mongoURL = process.env.MONGO_URL;


if (!mongoURL) {
    console.error('MONGO_URL environment variable is not set.');
    process.exit(1);
}


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB Atlas successfully.');
})
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
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




