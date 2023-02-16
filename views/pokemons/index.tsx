import { useState } from 'react';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import { Pokemon } from '../../interfaces/pokemon';
import * as S from './styles'
import usePokemonAPI from '../../hooks/usePokemonApi';
import Spinner from '../../components/spinner/Spinner';

const IndexPage = () => {
  const { pokemonList, loading, handleLoadMore } = usePokemonAPI();
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const handleCardClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <S.Title>Pokemon List</S.Title>
      {showModal && selectedPokemon && (
        <Modal onClose={() => setShowModal(false)} pokemon={selectedPokemon} />
      )}
      <S.List>
        {pokemonList.map((pokemon: Pokemon, index: number) => (
          <Card key={pokemon.name} pokemon={pokemon} index={index} onClick={() => handleCardClick(pokemon)} />
        ))}
      </S.List>
      {pokemonList.length > 0 && (
        <S.Button onClick={handleLoadMore}>Load more Pokémon {loading && <Spinner size={10} borderWidth={4} color="blue" />}</S.Button>
      )}
    </>
  );
};

export default IndexPage;