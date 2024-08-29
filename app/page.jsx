"use client";

import { useState, useEffect, useCallback } from "react";
import Pokemon from "../components/Pokemon";
import SearchBar from "../components/SearchBar";
import SelectBox from "../components/SelectBox";
import { fetchPokemon, fetchTypes } from "../lib/requests";

/**
 * Home component that displays a list of Pokémon and allows users to search and filter by type.
 *
 */

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [types, setTypes] = useState([]);
  const [selectTerm, setselectTerm] = useState("");
  const [hasSearched, sethasSearched] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  /**
   * Fetches Pokémon data and types from the API.
   */
  const fetchData = useCallback(async () => {
    const [pokemonData, typeData] = await Promise.all([
      fetchPokemon(15),
      fetchTypes(),
    ]);
    setPokemons(pokemonData);
    setfilteredData(pokemonData);
    setTypes(typeData);
  }, []);

  /**
   * Effect hook to fetch data when the component mounts.
   */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /**
   * Debounces the search input to prevent excessive filtering.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 600);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  /**
   * Filters the Pokémon data based on the select term and debounced search term.
   */

  useEffect(() => {
    // Filter by type
    if (selectTerm) {
      sethasSearched(true);
      const filtered = pokemons.filter((pokemon) =>
        pokemon.types.find((type) => type.type.name === selectTerm)
      );
      setfilteredData(filtered);
    } else {
      setfilteredData(pokemons);
    }

    // Further filter by debounced search term
    if (debouncedSearchTerm) {
      sethasSearched(true);
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setfilteredData(filtered);
    }
  }, [selectTerm, debouncedSearchTerm]);

  /**
   * Handles the search button click event.
   */
  const handleSearchClick = () => {
    sethasSearched(true);
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilteredData(filtered);
  };

  return (
    <main className="container mx-auto bg-gray-100 p-6 flex flex-col gap-5 min-h-svh fade-in">
      {/* Select Component */}
      {types && (
        <SelectBox
          options={types}
          value={selectTerm}
          onChange={(event) => setselectTerm(event.target.value)}
        />
      )}

      {/* Search bar component */}
      <SearchBar
        value={searchTerm}
        onChange={(event) => setsearchTerm(event.target.value)}
        onSearch={handleSearchClick}
      />

      {/* Pokemon card listing */}
      {filteredData.length > 0 || !hasSearched ? (
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-5 fade-in">
          {filteredData.map((pokemon, idx) => (
            <Pokemon key={idx} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-16 py-4 text-gray-600">
          No Pokémon found for{" "}
          <strong>
            {searchTerm && `Search: ${searchTerm}`}{" "}
            {selectTerm && `Term: ${selectTerm}`}
          </strong>
          . Try a different search query.
        </div>
      )}
    </main>
  );
}
