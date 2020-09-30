const caughtPokemon = [];
let id = 1;

module.exports = {
    getCaughtPokemon: (req, res) => {
        const db = req.app.get('db');

        db.get_pokemon()
            .then(pokemon => res.status(200).send(pokemon))
            .catch(err => res.status(500).send(err))
    },

    catchPokemon: (req, res) => {
        const {pokemon} = req.body;
        const db = req.app.get('db');

        db.add_pokemon({ name: pokemone.name, image: pokemon.image })
            .then(pokemon => res.status(200).send(pokemon))
            .catch(err => res.status(500).send(err))
        
        res.status(200).send(caughtPokemon);
    },
    editName: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;
        const db = req.app.get('db');

        // db.update_name({ name: name, id: id })
        db.update_name({ name, id })
            .then(pokemon => res.status(200).send(pokemon))
            .catch(err => res.status(500).send(err))
        
        
    },
    releasePokemon: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.release_pokemon(id)
    }
}