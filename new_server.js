const express = require('express');
const axios =require('axios');
const app = express();
const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};
app.get('/home', function(req,res){
    
    res.send('Hello World! This is my first Express.js application.');   
})
app.get('/user', function(req, res) {
    const url = 'http://localhost:3000/student';
    axios.get(url)
    .then(response => {
        console.log("Response data:", response.data);
        res.json(response.data);
    })
    .catch(error => {
        console.error('Error fetching student data:', error.message);
        res.status(500).json({ error: 'Failed to fetch student data' });
    });
    res.json('User data fetched successfully');
});

app.listen(4000, () => {
    console.log('Server two running on http://localhost:4000');
});