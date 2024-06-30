import LabelInput from "@/common/input/LabelInput";
import LabelSelectBox from "@/common/select/LabelSelectBox";
import { useCategory } from "@/hook/quires/category";
import { RoutineDataType } from "@/types/Routine";
import { useState } from "react";
import styled from "styled-components";
import { useAddRoutine, useRoutine } from "@/hook/quires/routine";
import AddRoutineSuccessModal from "@components/modal/AddRoutineSuccessModal";
import AddRoutineBodyFooter from "./AddRoutineBodyFooter";
import AddRoutineBodyAddButton from "./AddRoutineBodyAddButton";
import AddRoutineBodyList from "./AddRoutineBodyList";

export default function AddRoutineBody() {
  const { routine } = useRoutine();
  const { category } = useCategory();
  const [title, setTitle] = useState<string>("");
  const [categoryChange, setCategoryChange] = useState<string>("");
  const [exercise, setExercise] = useState<RoutineDataType[]>([]);
  const { addRoutine, addRoutineSuccess } = useAddRoutine();

  function handleAddExercise(title: string, kg: number, set: number) {
    setExercise([...exercise, { title, kg, set }]);
  }

  function handleAddRoutine() {
    if (!routine) return;
    addRoutine({
      id: routine[routine?.length - 1].id + 1,
      title,
      category: categoryChange,
      routine: exercise,
    });
  }

  return (
    <BodyWrapper>
      <LabelInput
        type="text"
        label="루틴 제목"
        width="100%"
        placeholder="...제목"
        handleChange={(e) => setTitle(e.target.value)}
      />
      <LabelSelectBox
        label="카테고리"
        title="카테고리"
        width="100%"
        values={category?.map((item) => item.category) ?? []}
        handleChangeSelect={(select) => setCategoryChange(select)}
      />
      {exercise.length > 0 && <AddRoutineBodyList exercise={exercise} />}
      <AddRoutineBodyAddButton handleAddExercise={handleAddExercise} />
      <AddRoutineBodyFooter handleAddRoutine={handleAddRoutine} />
      {addRoutineSuccess && <AddRoutineSuccessModal />}
    </BodyWrapper>
  );
}

const BodyWrapper = styled.main`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
