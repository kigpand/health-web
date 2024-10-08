import { createPortal } from "react-dom";
import React from "react";
import styled from "styled-components";

type Props = {
  component: React.ReactNode;
  background?: string;
  handleCloseModal?: () => void;
};

export default function ModalPortal({
  component,
  background,
  handleCloseModal,
}: Props) {
  return createPortal(
    <ModalWrapper $background={background}>
      {component}
      <div className="back" onClick={handleCloseModal}></div>
    </ModalWrapper>,
    document.getElementById("overlay-root")!
  );
}

const ModalWrapper = styled.section<{ $background?: string }>`
  width: 100vw;
  height: 100%;
  min-height: 100dvh;
  position: fixed;
  background-color: ${(props) => props.$background ?? "rgba(0,0,0,0.4)"};
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  }
`;
