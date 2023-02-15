import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 250px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  margin: 1rem 2rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const CardNumber = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;