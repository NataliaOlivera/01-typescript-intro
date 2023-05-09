export const pokemonIds = [1,20,30,34,66];

pokemonIds.push('hjghgh');

pokemonIds.push(+'5');


interface Pokemon{
    id:number;
    name: string;
    age? : number;
}

export const pikachu: Pokemon = {
    id: 0,
    name: "Pikachu",
}
export const charmander: Pokemon = {
    id: 1,
    name: "Charmander",
}

console.log(pikachu);

export const pokemons: Pokemon[] = [];

pokemons.push(pikachu, charmander)