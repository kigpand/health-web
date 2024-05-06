import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import LabelInput from "@/common/input/LabelInput";
import { useState } from "react";
import styled from "styled-components";

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
    <ModalPortal
      component={
        <ExerciseModalWrapper>
          <header>운동 추가</header>
          <LabelInput
            label="제목"
            width="100%"
            placeholder="제목"
            handleChange={(e) => setTitle(e.target.value)}
          />
          <LabelInput
            label="무게"
            width="100%"
            placeholder="무게"
            handleChange={(e) => setKg(Number(e.target.value))}
          />
          <LabelInput
            label="세트"
            width="100%"
            placeholder="세트"
            handleChange={(e) => setSet(Number(e.target.value))}
          />
          <footer>
            <Button
              width="100px"
              text="등록"
              type="primary"
              handleClick={() => handleAddButton(title, kg, set)}
            />
            <Button
              width="100px"
              text="취소"
              type="secondary"
              handleClick={handleCloseModal}
            />
          </footer>
        </ExerciseModalWrapper>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}

const ExerciseModalWrapper = styled.article`
  width: 300px;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  header {
    font-size: 18px;
    font-weight: bold;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;
