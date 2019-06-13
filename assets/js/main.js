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

const bulbasaur = pokemon[0];
const charmander = pokemon[1];
const squirtle = pokemon[2];
console.log(bulbasaur);
console.log(charmander);
console.log(squirtle);



//SET YOUR CHOSEN POKEMON
//want to set myPokemon var to whatever pokemon we choose

//declare pokemon var? as a function?
var myPokemon = bulbasaur;




//CREATE CHOOSE POKEMON BUTTONS
const chooseBtnBulbasaur = document.querySelector('#choose-bulbasaur');
const chooseBtnCharmander = document.querySelector('#choose-charmander');
const chooseBtnSquirtle = document.querySelector('#choose-squirtle');


chooseBtnBulbasaur.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('bulba');
});

chooseBtnCharmander.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('char');
});

chooseBtnSquirtle.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('squirt');
});




//Create attack button 
const attackButton = document.querySelector('.attack-button');
console.log(attackButton);

attackButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('attack');
});



