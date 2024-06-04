import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import LabelInput from "@/common/input/LabelInput";
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
      component={
        <ModalContainer>
          <Title>루틴 편집하기</Title>
          <LabelInput
            width="250px"
            placeholder="운동 명"
            defaultValue={routine.title}
            label="운동 명"
            handleChange={(e) =>
              setEditRoutine({ ...editRoutine, title: e.target.value })
            }
          />
          <ButtonWrapper>
            <Button
              width="100%"
              type="skyblue"
              text="등록"
              handleClick={() => console.log("1")}
            />
            <Button
              width="100%"
              type="secondary"
              text="취소"
              handleClick={handleCloseModal}
            />
          </ButtonWrapper>
        </ModalContainer>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}

const ModalContainer = styled.article`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.header`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ButtonWrapper = styled.footer`
  margin-top: 10px;
  display: flex;
  gap: 8px;
`;
