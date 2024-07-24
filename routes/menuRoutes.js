const express = require('express');
const app = express();

const MenuItem = require('../models/MenuItem.js');


app.post('', async (req,res)=>{
    try{
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('Data Saved');
        res.status(200).json(response);
    }
    catch(err){
        console.error('Error details:', err);
        res.status(500).send('Error in saving data');
    }
});

app.get('', async (req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('Data fetch');
        res.status(200).json(data);
    }
    catch(err){
        console.error('Error details:', err);
        res.status(500).send('Error in saving data');
    }
});

app.get('/:taste' , async(req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste === 'sweet' || taste === 'sour' || taste === 'spicy' || taste ==='bitter'|| taste ==='salty'){
            const response = await MenuItem.find({taste: taste});
            console.log('Data fetch');
            res.status(200).json(response);
        }
        else{
            res.status(400).json('Invalid taste type');
        }
    }
    catch(err){
        console.error('Error details:', err);
        res.status(500).send('Error in saving data');
    }
});

app.put('/:id' , async (req,res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const response = await MenuItem.findByIdAndUpdate(id, data, {
            new : true,
            useFindAndModify: false
        });

        if(!response){
            return res.status(404).send('Data not found');
        }

        console.log('Data updated');
        res.status(200).json(response);
    }
    catch(err){
        console.error('Error details:', err);
        res.status(500).send('Error in saving data');
    }

});

app.delete('/:id', async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await MenuItem.findByIdAndDelete(id);

        if(!response){
            return res.status(404).send('Data not found');
        }

        console.log('Data deleted');
        res.status(200).json(response);
    }
    catch(err){
        console.error('Error details:', err);
        res.status(500).send('Error in saving data');
    }
});

exports = module.exports = app;