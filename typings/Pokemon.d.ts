
export interface PokemonProps {
    name:    string;
    sprites: string;
    types:   string[];
}

export interface PokemonDetailProps{
    name: string,
    sprites: string,
    types: string[],
    stats: string[],
    abilities: string[],
    moves: string[],
}