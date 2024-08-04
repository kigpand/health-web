import LabelInput from "@/common/input/LabelInput";
import { RoutineDataType, RoutineListType } from "@/types/Routine";
import RoutineEditModalList from "@components/routineEdit/RoutineEditModalList";
import { useState } from "react";
import styled from "styled-components";
import RoutineEditModalAdd from "./RoutineEditModalAdd";
import RoutineEditModalUpdate from "./RoutineEditModalUpdate";
import { useRoutineUpdate } from "@/hook/quires/routine";
import TwoButtonModal from "./TwoButtonModal";

type Props = {
  routine: RoutineListType;
  handleCloseModal: () => void;
};

export default function RoutineEditModal({ routine, handleCloseModal }: Props) {
  const [editRoutine, setEditRoutine] = useState<RoutineListType>(routine);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [updateRoutineModal, setUpdateRoutineModal] =
    useState<RoutineDataType | null>(null);
  const { updateRoutine } = useRoutineUpdate();

  function handleEditButton() {
    if (editRoutine.routine.length === 0) return;
    updateRoutine(editRoutine);
    handleCloseModal();
  }

  function deleteRoutineItem(routineData: RoutineDataType) {
    const routine = editRoutine.routine.filter(
      (item) => item.title !== routineData.title
    );
    setEditRoutine({ ...editRoutine, routine: routine });
  }

  function updateRoutineItem(title: string, routineData: RoutineDataType) {
    const updateRoutine = editRoutine.routine.map((item) => {
      if (item.title === title) return routineData;
      return item;
    });
    setEditRoutine({
      ...editRoutine,
      routine: updateRoutine,
    });
  }

  function handleEditRoutine(routineData: RoutineDataType) {
    setEditRoutine({
      ...editRoutine,
      routine: [...editRoutine.routine, routineData],
    });
  }

  if (addModal) {
    return (
      <RoutineEditModalAdd
        handleEditRoutine={handleEditRoutine}
        handleClose={() => setAddModal(false)}
      />
    );
  }

  if (updateRoutineModal) {
    return (
      <RoutineEditModalUpdate
        routineData={updateRoutineModal}
        updateRoutineItem={updateRoutineItem}
        handleClose={() => setUpdateRoutineModal(null)}
      />
    );
  }

  return (
    <TwoButtonModal
      component={
        <>
          <Title>루틴 편집하기</Title>
          <LabelInput
            type="text"
            width="250px"
            placeholder="운동 명"
            defaultValue={routine.title}
            label="운동 명"
            handleChange={(e) =>
              setEditRoutine({ ...editRoutine, title: e.target.value })
            }
          />
          <RoutineEditModalList
            routine={editRoutine.routine}
            handleAddRoutine={() => setAddModal(true)}
            handleUpdateRoutine={(routineData: RoutineDataType) =>
              setUpdateRoutineModal(routineData)
            }
            deleteRoutineItem={deleteRoutineItem}
          />
        </>
      }
      primaryText="등록"
      primaryEvent={handleEditButton}
      secondaryText="취소"
      secondaryEvent={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}

const Title = styled.header`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;
