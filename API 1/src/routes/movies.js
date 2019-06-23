const express = require('express');
const router = express.Router();
const _ = require('underscore'); //librería js que maneja arreglos
const samples = require('../sample.json'); //samples funciona como un arreglo de objetos json


//obtiene todas las películas
router.get('/movies', (req, res) => {
    res.json(samples);
});

//crea una película
router.post('/movies', (req, res) => {
    const id = `${samples.length+1}`;
    const movie = {id, ...req.body}; //recordar que esto pasa todos los valores
    console.log(samples);
    samples.push(movie);
    res.send('Exitoso');
});

//actualiza una película
router.put('/movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = {...req.body};
    for (var i = 0; i < samples.length; i++){
        if (samples[i].id === id){
            samples[i].title = movie.title;
            samples[i].director = movie.director;
            samples[i].year = movie.year;
            samples[i].rating = movie.rating;
            break;
        }
    }
    res.json(samples);
});


//borra una película
router.delete('/movies/:id', (req, res) => {
    const id = req.params.id;
    for (var i = 0; i < samples.length; i++){
        if (samples[i].id === id){
            samples.splice(i,1);
            break;
        }
    }
    
    res.json(samples);
});

module.exports = router;