import { RoutineListType } from "@/types/Routine";
import RoutinePlayListWeightUpdateModal from "@components/modal/RoutinePlayListWeightUpdateModal";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  currentRoutine: number;
  routineDetail: RoutineListType;
};

export default function RoutinePlayListWeightUpdate({
  currentRoutine,
  routineDetail,
}: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <WeightUpdateWrapper>
      <label>무게:</label>
      <span onClick={() => setOpenModal(true)}>
        {routineDetail.routine[currentRoutine].kg}kg
      </span>
      {openModal && (
        <RoutinePlayListWeightUpdateModal
          handleCloseModal={() => setOpenModal(false)}
        />
      )}
    </WeightUpdateWrapper>
  );
}

const WeightUpdateWrapper = styled.div`
  width: 100px;
  display: flex;
  gap: 8px;
  font-size: 20px;

  label {
    font-weight: bold;
  }

  span {
    font-size: 22px;
    font-weight: bold;
    color: #0600ad;
  }
`;
