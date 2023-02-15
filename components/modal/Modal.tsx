import React, { useState } from 'react';
import styled from 'styled-components';
import { Pokemon } from '../../interfaces/pokemon';

interface ModalProps {
    pokemon: Pokemon;
    onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  z-index: 1000;
  padding: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const ModalText = styled.p`
  margin: 16px 0;
  font-size: 16px;
`;

const Modal: React.FC<ModalProps> = ({ pokemon, onClose }) => {
    return (
        <Overlay>
            <ModalWrapper>
                <CloseButton onClick={onClose}>X</CloseButton>
                <ModalContent>
                    <ModalImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
                    <ModalText>{pokemon.name}</ModalText>
                </ModalContent>
            </ModalWrapper>
        </Overlay>
    );
};

export default Modal;