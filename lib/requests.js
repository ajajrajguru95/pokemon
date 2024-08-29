/**
 * Fetches JSON data from a URL
 * @param {string} url
 */
const baseURL = process.env.NEXT_PUBLIC_API_URL;
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
  const url = `${baseURL}/pokemon?limit=${limit}`;
  const data = await fetchJson(url);
  // Fetch details for each Pokémon
  const pokemonDetailsPromises = data.results.map(async (pokemon) => {
    const result = await fetchJson(pokemon.url);
    return {
      name: pokemon.name,
      url: pokemon.url,
      ...result,
    };
  });
  const detailedPokemons = await Promise.all(pokemonDetailsPromises);
  return detailedPokemons;
};

/**
 * Fetches Pokémon types
 */
export const fetchTypes = async () => {
  const url = `${baseURL}/type/`;
  const data = await fetchJson(url);
  return data.results;
};

/**
 * Fetches Pokémon details by ID
 * @param {number} id
 */
export const fetchPokemonDetails = async (id) => {
  const url = `${baseURL}/pokemon/${id}`;
  return await fetchJson(url);
};
