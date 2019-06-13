/*Pokemon Objects*/

const pokemon = [
    {
        name: 'Bulbasaur',
        number: 001,
        types: ['Grass', 'Poison'],
        stats: {
            hp: 2,
            attack: 3,
            defense: 2,
            specialAtk: 3,
            specialDef: 3,
            speed: 3
        }
    },
    {
        name: 'Charmander',
        number: 004,
        types: ['Fire'],
        stats: {
            hp: 2,
            attack: 3,
            defense: 2,
            specialAtk: 3,
            specialDef: 2,
            speed: 4
        }
    },
    {
        name: 'Squirtle',
        number: 007,
        types: ['Water'],
        stats: {
            hp: 2,
            attack: 3,
            defense: 2,
            specialAtk: 3,
            specialDef: 3,
            speed: 3
        }
    }
];

var bulbasaur = pokemon[0];
var charmander = pokemon[1];
var squirtle = pokemon[2];
console.log(bulbasaur);
console.log(charmander);
console.log(squirtle);


