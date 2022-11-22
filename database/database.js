const mongoose = require('mongoose');
const {config} = require('dotenv');

config();

const connectDB = async(uri) => {
    try {
        mongoose.connect(uri || process.env.MONGO_DB_LOCAL);

        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message)

        // Exit failure
        process.exit(1); 
    }
}

module.exports = connectDB;