const _ = require('lodash');

// console.log("Server file is running")

// Different way of writing funtion
/*
function add(a,b){
    return a+b;
}

const add = function(a,b){
    return a+b;
}

const add = (a,b) =>{
    return a+b;
}


const res = add(1,10);
console.log(res);


(function(){
    console.log("hello");
})() 
*/



// --------------------------------------------CALLBACK FUNCTION------------------------------------


/*
function callback(){
    console.log("Keshav is running a callback function");
}

const add = function(a,b, fun){
    const res = a+b;
    console.log(`result : ${res}`);
    fun();
}

add(1,2,callback);

*/


/*

const add = function(a,b,king){
    const res = a+b;
    console.log("result : " + res);
    king();
}

add(2,3,function(){
    console.log(`callback is called`);
})

add(5,7, ()=>{console.log("arrow function")});

*/


// ----------------------------------------------CORE MODULES OF NODEJS------------------------


/*
var fs = require('fs');
const os = require('os');

const user = os.userInfo();

// console.log(user);
fs.appendFile('greetings.txt', `Hello ${user.username}!`, ()=>{ 
    console.log("Data is appended")
});

*/







// ----------------------------------------------IMPORT FILES-----------------------------------

const notes = require('./notes.js');

const age = notes.age;
const res = notes.addnumber(age,2);
console.log(res);




// ----------------------------------------------Loadash-----------------------------------

const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,4];

const res1 = _.uniq(arr);

console.log(res1);




//-------------------------------------------------EXPRESS.JS--------------------------------

const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello Express");
});

app.get('/user' , (req,res)=>{
    const user={
        name : "Keshav",
        age : 21,
        bhakthi : "Hanuman",
        address : "Delhi",
        
    }
    res.send(user);
})

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
})