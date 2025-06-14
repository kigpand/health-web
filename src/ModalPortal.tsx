import { createPortal } from "react-dom";
import React from "react";

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
    <section
      className={`w-screen h-full min-h-dvh fixed bg-black/40 top-0 flex items-center justify-center ${background}`}
    >
      {component}
      <div
        className="absolute top-0 left-0 -z-10 w-full h-full hover:cursor-pointer"
        onClick={handleCloseModal}
      ></div>
    </section>,
    document.getElementById("overlay-root")!
  );
}
