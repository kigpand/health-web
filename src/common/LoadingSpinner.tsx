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
  return <ModalPortal component={<SpinnerStyled />}></ModalPortal>;
}

const SpinnerStyled = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid white;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;
