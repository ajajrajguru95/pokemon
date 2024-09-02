
/**
 * Fetches JSON data from a URL
 * @param {string} url
 */
const fetchJson = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${url}: ${error.message}`);
      throw error;
    }
  };


  /**
 * Fetches Pokémon data with optional limit
 * @param {number} [limit=12]
 */

export const fetchPokemon = async (limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const data = await fetchJson(url);
    // Fetch details for each Pokémon
    const pokemonDetailsPromises = data.results.map(async (pokemon) => {
      const result = await fetchJson(pokemon.url);
      return {
        name: pokemon.name,
        url: pokemon.url,
        sprites: result.sprites?.other?.dream_world?.front_default,
        types: result.types.map(type => type.type.name),
      }
    });
    const detailedPokemons = await Promise.all(pokemonDetailsPromises);
    return detailedPokemons;
  }


/**
 * Fetches Pokémon types
 */
  export const fetchTypes = async () => {
    const url = 'https://pokeapi.co/api/v2/type/';
    const data =  await fetchJson(url);
    return data.results.map(type => type.name);
  }
  

/**
 * Fetches Pokémon details by Slug
 * @param {string} slug
 */
  export const fetchPokemonDetails = async (slug) => {
    const url =`https://pokeapi.co/api/v2/pokemon/${slug}`;
    const response =  await fetchJson(url);
    
    return {
      name: response.name,
      sprites: response.sprites?.other?.dream_world?.front_default,
      stats: response.stats.map(stat => stat.stat.name),
      types: response.types.map(type => type.type.name),
      moves: response.moves.slice(0, 10).map(move => move.move.name),
      abilities: response.abilities.map(ability => ability.ability.name),
    }
  }
