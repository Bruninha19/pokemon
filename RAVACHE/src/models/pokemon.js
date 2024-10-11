const {Model, Datatypes} = require('sequelize');


class pokemon extends Model{}

pokemon.init({
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Tipo: {
        type: DatatTypes.STRING,
        allowNull: false,
    },
    Altura: {
        type: Datatypes.INTEGER,
        allowNull: false,
    },
    Peso: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    NivelDePoder: {
        type: Datatypes.STRING,
    }

}, {
    sequelize,
    modelName: 'pokemon',
    tableName: 'pokemons',
    timestamps: true,
})
module.exports = pokemon;