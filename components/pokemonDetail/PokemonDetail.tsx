import { getRandomColor } from "../../helpers/common";
import StatsChart from "../stats/StatsChart";
import * as S from "./styles";
interface PokemonDetailsProps {
    pokemon: any;
}
const PokemonDetail = ({ pokemon }: PokemonDetailsProps) => {
    return (
        <S.Container>
            <S.ImageContainer>
                <S.Image src={pokemon.image} alt={pokemon.name} />
            </S.ImageContainer>
            <S.DetailsContainer>
                <S.Name>{pokemon.name}</S.Name>
                <S.TypeContainer>
                    {pokemon.types.map((type: any) => (
                        <S.Type key={type} background={getRandomColor()}>{type}</S.Type>
                    ))}
                </S.TypeContainer>
                <S.Description>{pokemon.description}</S.Description>
                <S.Characteristics>
                    <S.Height>Height: {pokemon.height}</S.Height>
                    <S.Weight>Weight: {pokemon.weight}</S.Weight>
                </S.Characteristics>
                <StatsChart stats={pokemon.stats}></StatsChart>
            </S.DetailsContainer>
        </S.Container>
    );
};

export default PokemonDetail