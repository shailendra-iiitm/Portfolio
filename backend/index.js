const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const connectDB = require('./config/connection');
const messageRoutes = require('./routes/messageRoutes');

 connectDB(); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/message', messageRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

const PORT = process.env.PORT || 7000 ; 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
