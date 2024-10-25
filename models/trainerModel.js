const trainers = [
    { nome: 'Ash Ketchum', pokemons: [{ id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno' }, { id: 2, nome: 'Squirtle', tipo: 'Água' }] },
    { nome: 'Misty', pokemons: [{ id: 3, nome: 'Charmander', tipo: 'Fogo' }] },
];

const getTrainers = () => trainers;

const getTrainerByName = (nome) => trainers.find(t => t.nome.toLowerCase() === nome.toLowerCase());

module.exports = { getTrainers, getTrainerByName };