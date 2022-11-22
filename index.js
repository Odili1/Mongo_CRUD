const express = require('express');
const {json} = require('express');
const {config} = require('dotenv');
const router = require('./routes/todoRoute');
const connectDB = require('./database/database');

config();

// Connect to Database
connectDB()

// Initailize express
const app = express();

// Initialize Express Middleware
app.use(express.json({extended: false}));
app.use('/todo', router);

// Create a basic express route
app.get('/', (req, res) => {
    res.send('Welcome to your To-do App')
})



// Server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server up and Running on port ${PORT}`))



