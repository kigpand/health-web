import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import LabelInput from "@/common/input/LabelInput";
import { RoutineDataType } from "@/types/Routine";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  routineData: RoutineDataType;
  updateRoutineItem: (title: string, routineData: RoutineDataType) => void;
  handleClose: () => void;
};

export default function RoutineEditModalUpdate({
  routineData,
  updateRoutineItem,
  handleClose,
}: Props) {
  const [routine, setRoutine] = useState<RoutineDataType>(routineData);

  function handleUpdateRoutineItem() {
    if (
      routineData.title === "" ||
      routineData.kg === 0 ||
      routineData.set === 0
    ) {
      return;
    }
    updateRoutineItem(routineData.title, routine);
    handleClose();
  }

  return (
    <ModalPortal
      component={
        <UpdateModal>
          <Title>루틴을 수정하세요</Title>
          <LabelInput
            type="text"
            label="루틴 명"
            width="100%"
            placeholder="루틴 명"
            defaultValue={routine.title}
            handleChange={(e) =>
              setRoutine({ ...routine, title: e.target.value })
            }
          />
          <LabelInput
            type="number"
            label="세트"
            width="100%"
            placeholder="세트"
            defaultValue={routine.set}
            handleChange={(e) =>
              setRoutine({ ...routine, set: Number(e.target.value) })
            }
          />
          <LabelInput
            type="number"
            label="무게"
            width="100%"
            placeholder="무게"
            defaultValue={routine.kg}
            handleChange={(e) =>
              setRoutine({ ...routine, kg: Number(e.target.value) })
            }
          />
          <ButtonWrapper>
            <Button
              type="primary"
              text="등록"
              width="100%"
              handleClick={handleUpdateRoutineItem}
            />
            <Button
              type="secondary"
              text="취소"
              width="100%"
              handleClick={handleClose}
            />
          </ButtonWrapper>
        </UpdateModal>
      }
      handleCloseModal={handleClose}
    />
  );
}

const UpdateModal = styled.article`
  background-color: white;
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
`;

const Title = styled.header`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.footer`
  display: flex;
  gap: 8px;
`;
