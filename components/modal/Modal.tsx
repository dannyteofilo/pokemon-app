import React from 'react';
import usePokemonDetail from '../../hooks/usePokemonDetail';
import { Pokemon } from '../../interfaces/pokemon';
import PokemonDetail from '../pokemonDetail/PokemonDetail';
import Spinner from '../spinner/Spinner';
import * as S from "./styles"

interface ModalProps {
  pokemon: Pokemon;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ pokemon, onClose }) => {
  const { pokemon: detail, isLoading } = usePokemonDetail(pokemon.url)
  return (
    <S.Overlay>
      <S.ModalWrapper>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        {detail && (<PokemonDetail pokemon={detail} />)}
        {isLoading && (
          <S.ContainerSpinner>
            <Spinner size={50} borderWidth={4} color="blue" />
          </S.ContainerSpinner>
        )
        }
      </S.ModalWrapper>
    </S.Overlay>
  );
};

export default Modal;