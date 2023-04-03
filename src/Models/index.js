const { Sequelize } = require("sequelize");
const typesFactory = require("./types");
const pokemonsFactory = require("./pokemons");

//-------Acces Parameters-------
let user = ""
let password = ""
let host =  ""
let dataBase = ""



const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}/${dataBase}`,
  { logging: false }
);

const type = typesFactory(sequelize);
const pokemon = pokemonsFactory(sequelize);

pokemon.belongsToMany(type, { through: "Pokemon_Type" });
type.belongsToMany(pokemon, { through: "Pokemon_Type" });


module.exports = {
  sequelize,
  type,
  pokemon,
};
