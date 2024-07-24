const express = require('express');
const app = express();

const Person = require('../models/Person.js');

app.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data Saved")
        res.status(200).json(response);
    } catch (err) {
        console.error('Error details::::::::::::::::::::::::::::::::::::::', err);
        res.status(500).send('Error in saving data');
    }
});


app.get('/', async (req,res)=>{
    try{
        const data = await Person.find();
        console.log('Data fetch');
        res.status(200).json(data);
    }
    catch(err){
        console.error('Error details:', err);
        res.status(500).send('Error in saving data');
    }

});


app.get('/:workType', async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType === 'chef' || workType === 'waiter' || workType === 'manager'){

            const response = await Person.find({work: workType});
            console.log('Data fetch');
            res.status(200).json(response);
        }
        else{
            res.status(400).json('Invalid work type'); 
        }
    }
    catch(err){
        console.error('Error details:', err);
        res.status(500).send('Error in saving data');
    }

});


app.put('/:id' , async (req,res)=>{
    try{
        const id = req.params.id;  //extract the id from URL Parameter
        const data = req.body;     // updated data for the person
        const response = await Person.findByIdAndUpdate(id, data, {
            new : true,  // Return the updated data
            runvalidators: true  // Run Mongoose validation
        })

        if(!response){
            return res.status(404).json('Invalid Person ID');
        }

        console.log('Data Updated');
        res.status(200).json(response);

    }catch(err){
        console.log('Error details:', err);
        res.status(500).send('Error in updating data');
    }

});


app.delete('/:id', async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);

        if(!response){
            return res.status(404).json('Invalid Person ID');
        }
        console.log('Data Deleted');
        res.status(200).json(response); 
    }
    catch(err){
        console.log('Error details:', err);
        res.status(500).json('Error in deleting data');
    }

});




exports = module.exports = app;