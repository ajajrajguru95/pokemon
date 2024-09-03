
export interface PokemonProps {
    name:    string;
    sprites: string;
    types:   string[];
}

export interface PokemonDetailProps extends PokemonProps {
    stats: string[];
    abilities: string[];
    moves: string[];
  }