import ModalPortal from "@/ModalPortal";
import { RoutineListType } from "@/types/Routine";
import { useMemo } from "react";
import styled from "styled-components";

type Props = {
  routineCount: RoutineListType[];
  handleCloseModal: () => void;
};

type CheckRoutine = {
  category: string;
  count: number;
};

export default function CheckRoutineModal({
  routineCount,
  handleCloseModal,
}: Props) {
  const routine = useMemo(() => {
    console.log(routineCount);
    // const result = routineCount.sort((a, b) =>
    //   a.category.toLowerCase() > b.category.toLowerCase() ? -1 : 1
    // );
    // console.log(result);
    // const result: CheckRoutine[] = [];
    // for (item of routineCount) {
    //     if ()
    // }
  }, [routineCount]);
  return (
    <ModalPortal
      component={<RoutineModal></RoutineModal>}
      handleCloseModal={handleCloseModal}
    />
  );
}

const RoutineModal = styled.article`
  width: 250px;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
`;
