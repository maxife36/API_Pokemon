const { Op } = require("sequelize");
const { type, pokemon } = require("../Models/index");
const V = require("../Utils/validations");
const Msg = require("../Utils/messages");
const { findPokemonByPk } = require("./pokemons");

let findAllTypes = async () => {
  let allTypes = await type.findAll();
  return allTypes;
};

let findByTypes = async (types_filter) => {
  //Data Validations

  await V.typeValidation(types_filter);

  //Execution

  let allPokemons = await type.findAll({
    where: {
      [Op.or]: types_filter,
    },
    include: pokemon,
  });

  return allPokemons;
};

let findTypeByPk = async (id) => {
  //Data Validations

  V.idValidation(id);

  //Execution

  let typeOfId = await type.findOne({
    where: { id: id },
  });

  if (typeOfId === null) return Msg.TypeNotFound;

  return typeOfId;
};

let findTypesOfPokemonByPk = async (id) => {
  //Data Validations

  V.idValidation(id);

  //Execution

  let poke = await findPokemonByPk(id);
  if (poke === Msg.PokeNotFound) return Msg.PokeNotFound;

  return await poke.getTypes();
};

let addTypesOnPokemonByPK = async (Type, id) => {
  //Data Validations

  await V.typeValidation(Type);

  let poke = await findPokemonByPk(id);
  if (poke === Msg.PokeNotFound) return Msg.PokeNotFound;

  //Execution

  let types_ids = [];

  for (let i = 0; i < Type.length; i++) {
    let typeID = await type.findOne({
      where: { name: Type[i].name },
    });
    types_ids.push(typeID);
  }

  await poke.addTypes(types_ids);

  return await findPokemonByPk(id);
};

let removeTypesFromfPokemonByPK = async (Type, id) => {
  //Data Validations

  await V.typeValidation(Type);

  let poke = await findPokemonByPk(id);
  if (poke === Msg.PokeNotFound) return Msg.PokeNotFound;

  //Execution

  let types_ids = [];

  for (let i = 0; i < Type.length; i++) {
    let typeID = await type.findOne({
      where: { name: Type[i].name },
    });
    types_ids.push(typeID);
  }

  await poke.removeTypes(types_ids);

  return await findPokemonByPk(id);
};

let destroyAllTypesFromPokemonByPK = async (id) => {
  //Data Validations

  let poke = await findPokemonByPk(id);
  if (poke === Msg.PokeNotFound) return Msg.PokeNotFound;

  //Execution

  await poke.setTypes([]);

  return await findPokemonByPk(id);
};

module.exports = {
  findAllTypes,
  findByTypes,
  findTypeByPk,
  findTypesOfPokemonByPk,
  addTypesOnPokemonByPK,
  removeTypesFromfPokemonByPK,
  destroyAllTypesFromPokemonByPK,
};
