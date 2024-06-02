import ModalPortal from "@/ModalPortal";
import { RoutineListType } from "@/types/Routine";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  routine: RoutineListType;
  handleCloseModal: () => void;
};

export default function RoutineEditModal({ routine, handleCloseModal }: Props) {
  const [editRoutine, setEditRoutine] = useState<RoutineListType>(routine);
  return (
    <ModalPortal
      component={<ModalContainer></ModalContainer>}
      handleCloseModal={handleCloseModal}
    />
  );
}

const ModalContainer = styled.article`
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
