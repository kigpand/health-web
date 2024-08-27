import { useState } from "react";
import styled from "styled-components";
import TwoButtonModal from "./TwoButtonModal";
import { LabelInput } from "ji-design-system";

type Props = {
  handleAddExercise: (title: string, kg: number, set: number) => void;
  handleCloseModal: () => void;
};

export default function AddExerciseModal({
  handleAddExercise,
  handleCloseModal,
}: Props) {
  const [title, setTitle] = useState<string>("");
  const [kg, setKg] = useState<number>(0);
  const [set, setSet] = useState<number>(0);

  function handleAddButton(title: string, kg: number, set: number) {
    handleAddExercise(title, kg, set);
    handleCloseModal();
  }

  return (
    <TwoButtonModal
      component={
        <ExerciseModalWrapper>
          <header>운동 추가</header>
          <LabelInput
            type="text"
            label="제목"
            width="100%"
            placeholder="제목"
            onChange={(e) => setTitle(e.target.value)}
          />
          <LabelInput
            type="number"
            label="무게"
            width="100%"
            placeholder="무게"
            onChange={(e) => setKg(Number(e.target.value))}
          />
          <LabelInput
            type="number"
            label="세트"
            width="100%"
            placeholder="세트"
            onChange={(e) => setSet(Number(e.target.value))}
          />
        </ExerciseModalWrapper>
      }
      primaryText="등록"
      primaryEvent={() => handleAddButton(title, kg, set)}
      secondaryText="취소"
      secondaryEvent={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}

const ExerciseModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  header {
    font-size: 18px;
    font-weight: bold;
  }
`;
