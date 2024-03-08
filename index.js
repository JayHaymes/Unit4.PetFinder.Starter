// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

const PORT = 8080;

// GET - / - returns homepage
app.use(express.static('public'))
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});




// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.json(pets);
});
// pseudo: when a get request is made to /api/v1/pets, it will return all pets from the pets array





// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const owner = req.query.owner;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response
    if (pet) {
        res.json(pet);
    } else {
        console.log("pet not found for the owner")
    }
});
// pseudo: when a get request is made to /api/v1/pets/owner, it will check if the owner and pet.owner are the same, then return all pets that match from the pets array.






// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const name = req.params.name

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    if (pet) {
        res.json(pet);
    } else{
        console.log("could not find the pet name")
    }
});
// pseudo: when a get request is made to /api/v1/pets/:name it will use the url parameter and seach for a pet with the same name from the pets array







app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;