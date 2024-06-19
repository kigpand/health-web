import Button from "@/common/button/Button";
import LabelInput from "@/common/input/LabelInput";
import { RoutineDataType } from "@/types/Routine";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  addRoutineItem: (routineData: RoutineDataType) => void;
  handleClose: () => void;
};

export default function RoutineEditModalAdd({
  addRoutineItem,
  handleClose,
}: Props) {
  const [title, setTitle] = useState<string>("");
  const [set, setSet] = useState<number>(0);
  const [kg, setKg] = useState<number>(0);

  return (
    <AddModal>
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
      <ButtonWrapper>
        <Button
          text="등록"
          type="skyblue"
          handleClick={() => addRoutineItem({ title, set, kg })}
          width="100%"
        />
        <Button
          text="취소"
          type="secondary"
          handleClick={handleClose}
          width="100%"
        />
      </ButtonWrapper>
    </AddModal>
  );
}

const AddModal = styled.article`
  background-color: white;
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
`;

const Title = styled.header`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 4px;
`;
