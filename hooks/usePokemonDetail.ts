import axios from "axios";
import { useEffect, useState } from "react";

const usePokemonDetail = (id: string) => {
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`${id}`);
        const pokemonData = response.data;
        const pokemon = {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
          types: pokemonData.types.map((type: any) => type.type.name),
          description: "",
          height: pokemonData.height,
          weight: pokemonData.weight,
          stats:pokemonData.stats
        };

        const speciesResponse = await axios.get(pokemonData.species.url);
        const speciesData = speciesResponse.data;
        const descriptionEntry = speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === "en"
        );
        if (descriptionEntry) {
          pokemon.description = descriptionEntry.flavor_text.replace(
            /(\r\n|\n|\r)/gm,
            " "
          );
        }

        setPokemon(pokemon);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  return { pokemon, isLoading, error };
};

export default usePokemonDetail;