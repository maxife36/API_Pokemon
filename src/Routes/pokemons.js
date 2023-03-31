const { Router } = require("express");
const router = Router();
const fn = require("../API_Controller/pokemons");

//All this routes start with "/pokemons"

// GETS ENDPOINTS
    router.get("/", fn.getAllPokemons);
    router.get("/feature", fn.getFeatureValues);
    router.get("/types", fn.getPokemonsByType);
    router.get("/:id", fn.getPokemonsByPk);

// POSTS ENPOINTS
    router.post("/NewPokemon", fn.postNewPokemon);

// PUTS ENPOINTS
    router.put("/:id", fn.putFeaturesByPk);

// DELETE ENPOINTS
    router.delete("/:id", fn.deletePokemonByPk);

module.exports = router;
