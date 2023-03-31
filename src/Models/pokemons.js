const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("Pokemon",{
        id : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        image: {
            type: DataTypes.STRING
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        attack: {
            type: DataTypes.INTEGER
        },
        defense: {
            type: DataTypes.INTEGER
        },
        "special-attack": {
            type: DataTypes.INTEGER
        },
       "special-defense": {
            type: DataTypes.INTEGER
        },
        speed: {
            type: DataTypes.INTEGER
        },
        accuaracy: {
            type: DataTypes.INTEGER
        },
        evasion: {
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: false,
        createdAt: false,
      }
    )
}