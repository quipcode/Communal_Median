const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const users = require('./routes/users')

const PORT = process.env.PORT || 8080;// connect to db

// || 'mongodb://localhost/mydb'
mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});


const app = express();

// Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//

app.use(express.static(path.join(__dirname, 'client/build')));


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api/users', users)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));