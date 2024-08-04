import LabelInput from "@/common/input/LabelInput";
import { RoutineDataType } from "@/types/Routine";
import { useState } from "react";
import styled from "styled-components";
import TwoButtonModal from "./TwoButtonModal";

type Props = {
  handleEditRoutine: (routineData: RoutineDataType) => void;
  handleClose: () => void;
};

export default function RoutineEditModalAdd({
  handleEditRoutine,
  handleClose,
}: Props) {
  const [title, setTitle] = useState<string>("");
  const [set, setSet] = useState<number>(0);
  const [kg, setKg] = useState<number>(0);

  function addRoutineItem(routineData: RoutineDataType) {
    if (
      routineData.title === "" ||
      routineData.kg === 0 ||
      routineData.set === 0
    ) {
      return;
    }
    handleEditRoutine(routineData);
    handleClose();
  }

  return (
    <TwoButtonModal
      component={
        <EditAddWrapper>
          <Title>루틴 추가</Title>
          <LabelInput
            type="text"
            label="루틴 명"
            width="100%"
            placeholder="루틴 명"
            handleChange={(e) => setTitle(e.target.value)}
          />
          <LabelInput
            type="number"
            label="무게"
            width="100%"
            placeholder="무게"
            handleChange={(e) => setKg(Number(e.target.value))}
          />
          <LabelInput
            type="number"
            label="세트"
            width="100%"
            placeholder="세트"
            handleChange={(e) => setSet(Number(e.target.value))}
          />
        </EditAddWrapper>
      }
      primaryText="등록"
      primaryEvent={() => addRoutineItem({ title, set, kg })}
      secondaryText="취소"
      secondaryEvent={handleClose}
      handleCloseModal={handleClose}
    />
  );
}

const EditAddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.header`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;
