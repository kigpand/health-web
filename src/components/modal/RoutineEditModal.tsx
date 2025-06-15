import { RoutineDataType, RoutineListType } from "@/types/Routine";
import RoutineEditModalList from "@components/routineEdit/RoutineEditModalList";
import { useState } from "react";
import RoutineEditModalAdd from "./RoutineEditModalAdd";
import RoutineEditModalUpdate from "./RoutineEditModalUpdate";
import { useRoutineUpdate } from "@/hook/quires/routine";
import TwoButtonModal from "./TwoButtonModal";
import { InputField } from "@components/components/common/InputField";

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
    if (editRoutine.title === "") return;
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
          <label className="font-bold mb-7 text-lg">루틴 편집하기</label>
          <InputField
            type="text"
            placeholder="운동 명"
            defaultValue={routine.title}
            label="운동 명"
            error={editRoutine.title === "" ? "운동 명을 적어주세요" : ""}
            onChange={(e) =>
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
