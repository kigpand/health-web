import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import LabelInput from "@/common/input/LabelInput";
import { RoutineDataType, RoutineListType } from "@/types/Routine";
import RoutineEditModalList from "@components/routineEdit/RoutineEditModalList";
import { useState } from "react";
import styled from "styled-components";
import RoutineEditModalAdd from "./RoutineEditModalAdd";
import RoutineEditModalUpdate from "./RoutineEditModalUpdate";
import { useRoutineUpdate } from "@/hook/quires/routine";

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

  function addRoutineItem(routineData: RoutineDataType) {
    if (
      routineData.title === "" ||
      routineData.kg === 0 ||
      routineData.set === 0
    ) {
      return;
    }
    setEditRoutine({
      ...editRoutine,
      routine: [...editRoutine.routine, routineData],
    });
    setAddModal(false);
  }

  function updateRoutineItem(title: string, routineData: RoutineDataType) {
    if (
      routineData.title === "" ||
      routineData.kg === 0 ||
      routineData.set === 0
    ) {
      return;
    }
    const updateRoutine = editRoutine.routine.map((item) => {
      if (item.title === title) return routineData;
      return item;
    });
    setEditRoutine({
      ...editRoutine,
      routine: updateRoutine,
    });
    setUpdateRoutineModal(null);
  }

  if (addModal) {
    return (
      <ModalPortal
        component={
          <RoutineEditModalAdd
            addRoutineItem={addRoutineItem}
            handleClose={() => setAddModal(false)}
          />
        }
        handleCloseModal={() => setAddModal(false)}
      />
    );
  }

  if (updateRoutineModal) {
    return (
      <ModalPortal
        component={
          <RoutineEditModalUpdate
            updateRoutineItem={updateRoutineItem}
            routineData={updateRoutineModal}
            handleClose={() => setUpdateRoutineModal(null)}
          />
        }
        handleCloseModal={() => setUpdateRoutineModal(null)}
      />
    );
  }

  return (
    <ModalPortal
      component={
        <ModalContainer>
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
          <ButtonWrapper>
            <Button
              width="100%"
              type="skyblue"
              text="등록"
              handleClick={handleEditButton}
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
  max-height: 700px;
`;

const Title = styled.header`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ButtonWrapper = styled.footer`
  margin-top: 10px;
  display: flex;
  gap: 8px;
`;
