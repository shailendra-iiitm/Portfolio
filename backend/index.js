const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const connectDB = require('./config/connection');
const messageRoutes = require('./routes/messageRoutes');

 connectDB(); // Connect to MongoDB

const app = express();

// Configure CORS to allow requests from your frontend domains
const corsOptions = {
  origin: [
    'http://localhost:5173', // Local development
    'http://localhost:3000', // Alternative local port  
    'https://shailendra-portfolio.vercel.app', // Your likely Vercel domain
    'https://*.vercel.app', // Any Vercel subdomain
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/message', messageRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

const PORT = process.env.PORT || 7000 ; 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
