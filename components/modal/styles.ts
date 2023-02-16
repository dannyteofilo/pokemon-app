import styled from "styled-components";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  z-index: 1000;
  padding: 16px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const ModalText = styled.p`
  margin: 16px 0;
  font-size: 16px;
`;

export const ContainerSpinner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
