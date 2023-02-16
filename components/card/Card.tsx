
import { Pokemon } from '../../interfaces/pokemon';
import * as S from './style';

interface CardProps {
    pokemon: Pokemon;
    index?: number;
    onClick: () => void
}

const Card: React.FC<CardProps> = ({ pokemon, index, onClick }) => {
    const { name, url } = pokemon;

    return (
        <S.CardContainer onClick={onClick}>
            <S.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('/')[6]}.png`}
                alt={pokemon.name}
            />
            <S.CardNumber>
                {name.charAt(0).toUpperCase() + name.slice(1)} #{index}
            </S.CardNumber>
        </S.CardContainer>
    );
};

export default Card;