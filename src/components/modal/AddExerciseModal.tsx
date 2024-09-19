import { useState } from "react";
import styled from "styled-components";
import TwoButtonModal from "./TwoButtonModal";
import { LabelInput } from "ji-design-system";

type Props = {
  handleAddExercise: (
    title: string,
    kg: number,
    set: number,
    link: string
  ) => void;
  handleCloseModal: () => void;
};

export default function AddExerciseModal({
  handleAddExercise,
  handleCloseModal,
}: Props) {
  const [title, setTitle] = useState<string>("");
  const [kg, setKg] = useState<number>(0);
  const [set, setSet] = useState<number>(0);
  const [link, setLink] = useState<string>("");
  const [errTitle, setErrTitle] = useState<string>("");
  const [errSet, setErrSet] = useState<string>("");

  function handleAddButton(
    title: string,
    kg: number,
    set: number,
    link: string
  ) {
    if (title === "") return setErrTitle("제목을 입력해주세요.");
    if (set === 0) return setErrSet("횟수를 입력해주세요");
    handleAddExercise(title, kg, set, link);
    handleCloseModal();
  }

  function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    if (errTitle !== "") setErrTitle("");
    setTitle(e.target.value);
  }

  function handleChangeSet(e: React.ChangeEvent<HTMLInputElement>) {
    if (errSet !== "") setErrSet("");
    setSet(Number(e.target.value));
  }

  return (
    <TwoButtonModal
      component={
        <ExerciseModalWrapper>
          <header>운동 추가</header>
          <LabelInput
            type="text"
            label="제목"
            $width="100%"
            placeholder="제목"
            errortext={errTitle}
            onChange={handleChangeTitle}
          />
          <LabelInput
            type="number"
            label="무게"
            $width="100%"
            placeholder="무게"
            onChange={(e) => setKg(Number(e.target.value))}
          />
          <LabelInput
            type="number"
            label="세트"
            $width="100%"
            placeholder="세트"
            errortext={errSet}
            onChange={handleChangeSet}
          />
          <LabelInput
            type="text"
            label="링크"
            $width="100%"
            placeholder="링크"
            onChange={(e) => setLink(e.target.value)}
          />
        </ExerciseModalWrapper>
      }
      primaryText="등록"
      primaryEvent={() => handleAddButton(title, kg, set, link)}
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
