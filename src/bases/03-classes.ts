import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon{

    /* public id: number;
    public name: string;

    constructor( id:number, name:string ){
        console.log("constructor");
        this.id = id;
        this.name = name;
    } */


    get imageUrl(): string{
        return `https//pokemon.com/${ this.id }.jpg`;
    }

    constructor( public readonly id: number, public name: string){}
    //readonly no permite cambiar el valor

    scream(){
        console.log(`${ this.name.toUpperCase() }`);
    }

    speak(){
        console.log(`${ this.name }`);
    }

    async getMoves() : Promise<Move[]>{
        //ctrol + space para desestructurar ej { data }
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/152')
        console.log( data.moves[0].move.name )
        return data.moves;
        // return 10;
    }
}

export const chicorita = new Pokemon( 152, "Chicorita" );

console.log (chicorita);

// chicorita.scream();
// chicorita.speak();

console.log(chicorita.getMoves());