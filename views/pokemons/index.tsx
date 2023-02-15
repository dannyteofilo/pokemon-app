import { useState } from 'react';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import { Pokemon } from '../../interfaces/pokemon';
import { Title, List, Button, Spinner } from './styles'
import usePokemonAPI from '../../hooks/usePokemonApi';

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
      <Title>Pokemon List</Title>
      {showModal && selectedPokemon && (
        <Modal onClose={() => setShowModal(false)} pokemon={selectedPokemon} />
      )}
      <List>
        {pokemonList.map((pokemon: Pokemon, index: number) => (
          <Card key={pokemon.name} pokemon={pokemon} index={index} onClick={() => handleCardClick(pokemon)} />
        ))}
      </List>
      {loading && <Spinner />}
      {pokemonList.length > 0 && (
        <Button onClick={handleLoadMore}>Load more Pokémon</Button>
      )}
    </>
  );
};

export default IndexPage;