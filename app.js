// we write those express and app to import the Express.js library 
// and initialize my application so your server can start handling HTTP requests

//imports the express module to my files 
// giving acess to the express library and its methods
const express = require('express');
const axios =require('axios');
//this initializes the express application and assigns it to the variable app
const app = express();

//ekhon ekta object create kortesi jetar key value pair er modhhe onekgula data thakbe
const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

//this sets the port number for the server to listen on, either from an environment variable or defaulting to 3000
// ekhane ekta callback function ache
app.get('/home', function(req,res){
    //res.send eta dara bujhachhe je jei request ta asche seta send kore daw
    res.send('Hello World! This is my first Express.js application.');
    
})

app.get('/student/:id',function(req,res){
    console.log(req.query.id);
    console.log(req.params.id); 
    res.send({
        name: 'mahadi',
        age: 22,
        email: 'mahadi@example.com'
    });

})


app.listen(3000)