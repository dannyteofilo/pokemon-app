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

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
