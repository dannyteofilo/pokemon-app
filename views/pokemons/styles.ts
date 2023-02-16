import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background-color: #30a7d7;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }

  &:active {
    background-color: #d32f2f;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -10px;
`;

