const { Sequelize } = require("sequelize");
const typesFactory = require("./types");
const pokemonsFactory = require("./pokemons");

const sequelize = new Sequelize(
  "postgres://{USER}:{PASSWORD}@{HOST}/{DB}",
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
