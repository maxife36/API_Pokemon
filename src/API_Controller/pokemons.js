const C = require("../DB_controller/pokemons");
const Msg = require("../Utils/messages");

let getAllPokemons = async (req, res) => {
  try {
    let allPokemons = await C.findAllPokemons();

    res.status(200).send(allPokemons);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

let getPokemonsByType = async (req, res) => {
  try {
    let type = req.body

    let allPokemons = await C.findByType(type);

    res.status(200).send(allPokemons);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

let getPokemonsByPk = async (req, res) => {
  try {
    let pokeId = req.params.id;

    let poke = await C.findPokemonByPk(pokeId);

    res.status(200).send(poke);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

let getFeatureValues = async (req, res) => {
  try {
    let { feature, mayeq, loweq } = req.query;
    let pokes = null;

    if (!feature) throw Msg.ErrorFeatuerNotEntered;

    if (mayeq && loweq) throw Msg.ErrorOnlyOneComparator;

    if (!mayeq && !loweq) {
      pokes = await C.findFeature(feature);
    }

    if (mayeq || loweq) {
      pokes = await C.findFeaturesValues(feature, mayeq, loweq);
    }

    res.status(200).send(pokes);
  } catch (err) {
    if (err === Msg.ErrorFeatuerNotFound)
      return res.status(404).send(Msg.ErrorFeatuerNotFound.message);
    res.status(400).send(err.message);
  }
};

let postNewPokemon = async (req, res) => {
  try {
    let poke = await C.creatPokemon(req.body);

    res.status(200).send(poke);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

let putFeaturesByPk = async (req, res) => {
  try {
    let data = req.body
    let id = req.params.id

    let poke = await C.modifyFeaturesByPk(data, id);

    res.send(poke);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

let deletePokemonByPk = async (req,res) =>{
  try {
    let id = req.params.id
    let pokeDeleted = await C.destroyPokemonByPk(id)

    console.log(pokeDeleted);


    res.status(200).send(Msg.PokemonDeleted + pokeDeleted.dataValues.name.toUpperCase())
    
  } catch (err) {
    res.status(400).send(err.message);
  }
}

module.exports = {
  getAllPokemons,
  getPokemonsByType,
  getPokemonsByPk,
  getFeatureValues,
  postNewPokemon,
  putFeaturesByPk,
  deletePokemonByPk,
};
