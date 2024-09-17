import { RoutineDataType } from "@/types/Routine";
import { useState } from "react";
import styled from "styled-components";
import TwoButtonModal from "./TwoButtonModal";
import { LabelInput } from "ji-design-system";

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
    if (routine.title === "" || routine.kg === 0 || routine.set === 0) {
      return;
    }
    updateRoutineItem(routineData.title, routine);
    handleClose();
  }

  return (
    <TwoButtonModal
      component={
        <EditUpdateWrapper>
          <Title>루틴을 수정하세요</Title>
          <LabelInput
            type="text"
            label="루틴 명"
            $width="100%"
            placeholder="루틴 명"
            defaultValue={routine.title}
            onChange={(e) => setRoutine({ ...routine, title: e.target.value })}
          />
          <LabelInput
            type="number"
            label="세트"
            $width="100%"
            placeholder="세트"
            defaultValue={routine.set}
            onChange={(e) =>
              setRoutine({ ...routine, set: Number(e.target.value) })
            }
          />
          <LabelInput
            type="number"
            label="무게"
            $width="100%"
            placeholder="무게"
            defaultValue={routine.kg}
            onChange={(e) =>
              setRoutine({ ...routine, kg: Number(e.target.value) })
            }
          />
          <LabelInput
            type="text"
            label="링크"
            $width="100%"
            placeholder="링크"
            defaultValue={routine.link ?? ""}
            onChange={(e) => setRoutine({ ...routine, link: e.target.value })}
          />
        </EditUpdateWrapper>
      }
      primaryText="등록"
      primaryEvent={handleUpdateRoutineItem}
      secondaryText="취소"
      secondaryEvent={handleClose}
      handleCloseModal={handleClose}
    />
  );
}

const EditUpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.header`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
