import { useRoutineUpdate } from "@/hook/quires/routine";
import { RoutineListType } from "@/types/Routine";
import { useState } from "react";
import styled from "styled-components";
import TwoButtonModal from "./TwoButtonModal";
import { Input } from "ji-design-system";

type Props = {
  currentRoutine: number;
  routineDetail: RoutineListType;
  handleCloseModal: () => void;
};

export default function RoutinePlayListWeightUpdateModal({
  currentRoutine,
  routineDetail,
  handleCloseModal,
}: Props) {
  const [kg, setKg] = useState<number>(0);
  const { updateRoutine } = useRoutineUpdate();

  function handleUpdateWeightButton() {
    const newRoutine = routineDetail.routine[currentRoutine];
    newRoutine.kg = kg;
    routineDetail.routine[currentRoutine] = newRoutine;
    updateRoutine(routineDetail);
    handleCloseModal();
  }

  return (
    <TwoButtonModal
      component={
        <RoutinePlayWeightWrapper>
          <Title>변경할 무게를 입력하세요.</Title>
          <Input
            type="number"
            $width="100%"
            placeholder="무게"
            onChange={(e) => setKg(Number(e.target.value))}
          />
        </RoutinePlayWeightWrapper>
      }
      primaryText="등록"
      primaryEvent={handleUpdateWeightButton}
      secondaryText="취소"
      secondaryEvent={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}

const RoutinePlayWeightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Title = styled.header`
  font-size: 18px;
  font-weight: bold;
`;
