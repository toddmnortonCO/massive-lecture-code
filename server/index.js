const express = require('express');
const grassCtrl = require('./controllers/grassCtrl');
const pokeCtrl = require('./controllers/pokemonCtrl');
const app = express();

app.use(express.json());

//grassCtrl endpoints
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon);

//pokeCtrl endpoints
app.get('/api/caught-pokemon', pokeCtrl.getCaughtPokemon);
app.post('/api/caught-pokemon', pokeCtrl.catchPokemon);
app.put('/api/caught-pokemon/:id', pokeCtrl.editName);
app.delete('/api/caught-pokemon/:id', pokeCtrl.releasePokemon);

app.listen(4444, () => console.log('Server is running on 4444'));