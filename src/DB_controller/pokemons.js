const { Op } = require("sequelize");
const { pokemon, type } = require("../Models/index");
const V = require("../Utils/validations");
const Msg = require("../Utils/messages");

let findAllPokemons = async () => {
  let allPokemons = await pokemon.findAll({
    include: {
      model: type,
      attributes: ["name"],
    },
  });

  return allPokemons;
};

let findPokemonByPk = async (id) => {
  //Data Validations
  V.idValidation(id);

  //Execution

  let poke = await pokemon.findByPk(id, {
    include: {
      model: type,
      attributes: ["name"],
    },
  });

  if (poke === null) return Msg.PokeNotFound;

  return poke;
};

let findFeature = async (feature) => {
  //Data Validations

  V.existsFeatureValidation(feature);

  //Execution

  let pokes = await pokemon.findAll({
    attributes: ["name", feature],
  });

  return pokes;
};

let findByType = async (types_filter) => {
  //Data Validations
  console.log("ESTOY EN 1");
  await V.typeValidation(types_filter);
  console.log("ESTOY EN 2");

  //Execution

  let allPokemons = await pokemon.findAll({
    include: {
      model: type,
      where: {
        [Op.or]: types_filter,
      },
    },
  });

  return allPokemons;
};

let findFeaturesValues = async (feature, mayeq, loweq) => {
  //Data Validations

  V.existsFeatureValidation(feature);

  //Execution

  let pokes = await pokemon.findAll({
    attributes: { exclude: ["id"] },
    where: {
      [Op.or]: [
        { [feature]: { [Op.gte]: mayeq } },
        { [feature]: { [Op.lte]: loweq } },
      ],
    },
  });

  if (!pokes.length) return Msg.PokeNotFound;

  return pokes;
};

let creatPokemon = async (data) => {
  //Data Validations

  await V.nameValidations(data.name);
  V.hpValidation(data.hp);
  await V.typeValidation(data.Types);

  //Execution

  let newPokemon = await pokemon.create(data);

  //--------------------
  let poke_types = [];

  let types = data.Types;

  for (let i = 0; i < types.length; i++) {
    let type_searched = types[i].name;

    let id_searched = await type.findOne({
      attributes: ["id"],
      where: { name: type_searched },
    });

    poke_types.push(id_searched.dataValues.id);
  }
  await newPokemon.addTypes(poke_types);

  return newPokemon;
};

let modifyFeaturesByPk = async (data, id) => {
  //Data Validations

  V.idValidation(id);

  data.hasOwnProperty("name") && (await V.nameValidations(data.name));

  data.hasOwnProperty("hp") && V.hpValidation(data.hp);

  //Execution

  let poke = await pokemon.update(data, {
    where: { id: id },
  });

  return await findPokemonByPk(id);
};

let destroyPokemonByPk = async (id) => {
  //Data Validations

  V.idValidation(id);

  //Execution
  let poke_to_destroy = await pokemon.findOne({
    where: { id: id },
  });

  await pokemon.destroy({
    where: { id: id },
  });

  return poke_to_destroy;
};

module.exports = {
  findAllPokemons,
  findPokemonByPk,
  findFeature,
  findByType,
  findFeaturesValues,
  creatPokemon,
  modifyFeaturesByPk,
  destroyPokemonByPk,
};
