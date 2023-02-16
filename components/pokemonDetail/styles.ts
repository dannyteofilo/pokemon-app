import styled from "styled-components";
import { ColorProps } from "../../interfaces/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const ImageContainer = styled.div`
  margin-right: 20px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Characteristics = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #30a7d7;
  border-radius: 8px;
  padding: 1rem;
`;

export const Name = styled.h1`
  font-size: 24px;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Type = styled.div`
  padding: 5px 10px;
  margin-right: 10px;
  background-color: ${(props: ColorProps) => props.background};
  border-radius: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Height = styled.p`
  font-size: 14px;
  margin-bottom: 10px;  
`;

export const Weight = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;
