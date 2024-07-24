const express = require('express');

const app = express();
const db = require('./db.js');

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const Person = require('./models/Person.js');
const MenuItem = require('./models/MenuItem.js');

app.get('/', (req,res)=>{
    res.send('Welcome to our hotels');
});


const personRoutes = require('./routes/personROutes.js');

app.use('/person', personRoutes);


const menuRoutes = require('./routes/menuRoutes.js');

app.use('/menu', menuRoutes);



app.listen(PORT, ()=>{  
    console.log('Server is running on port 3000');
});

