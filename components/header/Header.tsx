import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  height: 100px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="../../public/logo-pokemon.png" alt="Pokemon API" />
    </HeaderContainer>
  );
};

export default Header;