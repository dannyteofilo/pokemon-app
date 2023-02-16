import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./Spinner";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: ${(props: SpinnerProps) => props.size}px;
  height: ${(props: SpinnerProps) => props.size}px;
  border: ${(props: SpinnerProps) => props.borderWidth}px solid #ccc;
  border-top-color: ${(props: SpinnerProps) => props.color};
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;