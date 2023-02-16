import * as S from './style'
import logo from './logo-pokemon.png'
import Image from 'next/image'

const Header = () => {
  return (
    <S.HeaderContainer>      
       <Image
        src="/logo-pokemon.png"
        alt="My Image"
        width={150}
        height={100}
      />
    </S.HeaderContainer>
  );
};

export default Header;