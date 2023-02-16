import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/pokemon";

const usePokemonAPI = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"
      );
      setPokemonList(response.data.results);
      setNextPageUrl(response.data.next);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        handleLoadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPageUrl]);

  const handleLoadMore = async () => {
    setIsFirstLoad(false);
    if (!nextPageUrl || loading || isFirstLoad) return;
    setLoading(true);
    const response = await axios.get(nextPageUrl);
    setPokemonList([...pokemonList, ...response.data.results]);
    setNextPageUrl(response.data.next);
    setLoading(false);
  };

  return { pokemonList, loading, handleLoadMore };
};

export default usePokemonAPI;
