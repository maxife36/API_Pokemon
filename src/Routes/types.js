const { Router } = require("express");
const router = Router() 
const fn = require("../API_Controller/types")

//All this routes start with "/types"

// GETS ENDPOINTS
    router.get("/", fn.getAllTypes);
    router.get("/PokemonsByTypes", fn.getPokemonsByType);
    router.get("/TypesOfPokemon", fn.getTypesOfPokemonByPK);
    router.get("/:id", fn.getTypeByPk);

// PUTS ENPOINTS
    router.put("/addTypeToPokemon", fn.putTypeOnPokemon);

// DELETE ENPOINTS
    router.delete("/TypesFromPokemon", fn.deleteTypesFromPokemon);
    router.delete("/AllTypesFromPokemon", fn.deleteAllTypesFromPokemonByPK);


module.exports = router