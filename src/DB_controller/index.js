const { pokemon, type } = require("../Models/index");
const axios = require("axios");

let fillTypes = async () => {
  try {
    let types_info = await axios("https://pokeapi.co/api/v2/type/");

    for (let i = 0; i < types_info.data.results.length; i++) {
      let el = types_info.data.results[i];
      await type.create({ name: el.name });
    }
  } catch (error) {}
};

let fillPokemons = async (inicio, final) => {
  try {
    if (inicio < 1) throw new Error("Debe ser 0 < inicio < 1281");
    if (final > 1281) throw new Error("Debe ser 0 < final < 1281");
    if (inicio > final) throw new Error("Debe ser inicio < final ");
    let j = 0;

    for (let i = inicio; i <= final; i++) {
      let poke_info = await axios(`https://pokeapi.co/api/v2/pokemon/${i}/`);

      // Recopilacion y creación de pokemon
      let new_poke = {
        name: poke_info.data.name,
        image: poke_info.data.sprites.other["official-artwork"].front_default,
      };

      for (let i = 0; i < poke_info.data.stats.length; i++) {
        let stats = poke_info.data.stats;
        new_poke[stats[i].stat.name] = stats[i].base_stat;
      }

      let pk = await pokemon.create(new_poke);

      //Recopilacion y creacion de realcion Pokemon-Types

      let poke_types = [];

      let types = poke_info.data.types;

      for (let i = 0; i < types.length; i++) {
        let type_searched = types[i].type.name;

        let id_searched = await type.findOne({
          attributes: ["id"],
          where: { name: type_searched },
        });

        poke_types.push(id_searched.dataValues.id);
      }

      await pk.addTypes(poke_types);
    }

    return "fillPokemons Successful";
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};


module.exports = {
  fillPokemons,
  fillTypes,
};
