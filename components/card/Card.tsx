
import { Pokemon } from '../../interfaces/pokemon';
import { CardContainer, Image, CardNumber } from './style';

interface CardProps {
    pokemon: Pokemon;
    index?: number;
    onClick: ()=> void
}

const Card: React.FC<CardProps> = ({ pokemon, index, onClick }) => {
    const { name, url } = pokemon;

    return (
        <CardContainer onClick={onClick}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split('/')[6]}.png`}
                alt={pokemon.name}
            />
            <CardNumber>
                {name.charAt(0).toUpperCase() + name.slice(1)} #{index}
            </CardNumber>
        </CardContainer>
    );
};

export default Card;