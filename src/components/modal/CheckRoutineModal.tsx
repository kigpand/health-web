import ModalPortal from "@/ModalPortal";
import { RoutineListType } from "@/types/Routine";
import styled from "styled-components";

type Props = {
  routineCount: RoutineListType[];
  handleCloseModal: () => void;
};

export default function CheckRoutineModal({ handleCloseModal }: Props) {
  return (
    <ModalPortal
      component={<RoutineModal></RoutineModal>}
      handleCloseModal={handleCloseModal}
    />
  );
}

const RoutineModal = styled.article``;
