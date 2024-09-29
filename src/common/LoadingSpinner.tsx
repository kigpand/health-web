import ModalPortal from "@/ModalPortal";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

export default function LoadingSpinner() {
  return (
    <ModalPortal
      background="rgba(255,255,255,0.3)"
      component={<SpinnerStyled />}
    ></ModalPortal>
  );
}

const SpinnerStyled = styled.div`
  height: 60px;
  width: 60px;
  border: 4px solid lightgray;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
  z-index: 100;
`;
