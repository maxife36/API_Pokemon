const C = require("../DB_controller/types");
const Msg = require("../Utils/messages");

let getAllTypes = async (req, res) => {
  try {
    let types = await C.findAllTypes();

    res.status(200).send(types);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

let getTypeByPk = async (req, res) => {
  try {
    let id = req.params.id

    let type = await C.findTypeByPk(id);

    res.status(200).send(type);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

let getPokemonsByType = async (req, res) => {
  try {
    let type = req.body

    let allPokemons = await C.findByTypes(type);

    res.status(200).send(allPokemons);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

let getTypesOfPokemonByPK = async (req,res) => {
  try {
      let id = req.query.id
      
      let poke = await C.findTypesOfPokemonByPk(id)
      
      res.status(200).send(poke)
      
  } catch (err) {
      res.status(400).send(err.message)
  }
}

let putTypeOnPokemon = async (req,res) => {
    try {
        let id = req.query.id
        let data = req.body

        let poke = await C.addTypesOnPokemonByPK(data, id)
        
        res.status(200).send(poke)
        
    } catch (err) {
        res.status(400).send(err.message)
    }
}

let deleteTypesFromPokemon = async (req,res) => {
  try {
      let id = req.query.id
      let data = req.body

      let poke = await C.removeTypesFromfPokemonByPK(data, id)
      
      res.status(200).send(poke)
      
  } catch (err) {
      res.status(400).send(err.message)
  }
}

let deleteAllTypesFromPokemonByPK = async (req,res) => {
  try {
      let id = req.query.id
      
      let poke = await C.destroyAllTypesFromPokemonByPK(id)
      
      res.status(200).send(poke)
      
  } catch (err) {
      res.status(400).send(err.message)
  }
}

module.exports = {
    getAllTypes,
    getTypeByPk,
    getPokemonsByType,
    getTypesOfPokemonByPK,    
    putTypeOnPokemon,
    deleteTypesFromPokemon,
    deleteAllTypesFromPokemonByPK
};
