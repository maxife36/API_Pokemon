const { Router } = require("express");
const router = Router() 

const pokemonsRoutes = require("./pokemons")
const typesRoutes = require("./types")

router.use("/pokemons", pokemonsRoutes)
router.use("/types", typesRoutes)


module.exports = router