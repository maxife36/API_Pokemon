const { Op } = require("sequelize");
const { pokemon, type } = require("../Models/index");
const validator = require("validator");
const Msg = require("./messages");

let idValidation = (id) => {
  if (!validator.isUUID(id)) throw Msg.ErrorInvalidID;
};

let existsFeatureValidation = (feature) => {
    let possibleFeatures = [
        "hp",
        "attack",
        "defense",
        "special-attack",
        "special-defense",
        "speed",
        "accuaracy",
        "evasion",
      ];
    
      if (!possibleFeatures.includes(feature)) throw Msg.ErrorFeatuerNotFound
}

let nameValidations = async (name) => {
    if (!name || typeof name !== "string") throw Msg.ErrorName;

    let uniqueName = await pokemon.findOne({
      where: { "name": name },
    });
  
    if (uniqueName !== null) throw Msg.ErrorNoUniqueName;
}

let hpValidation = (hp) => {
  if (!hp || typeof hp !== "number") throw Msg.ErrorHp;
}

let typeValidation = async (Types) => {
// Types must be an array of objects with the searched properties
  let typeID = await type.findAll({
    attributes: ["name"],
    where: {
      [Op.or]: Types, 
    },
  });

  if (Types.length !== typeID.length) throw Msg.ErrorInvalidType;
}

module.exports = {
  idValidation,
  existsFeatureValidation,
  nameValidations,
  hpValidation,
  typeValidation
};
