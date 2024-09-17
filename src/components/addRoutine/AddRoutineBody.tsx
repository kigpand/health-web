import { useCategory } from "@/hook/quires/category";
import { RoutineDataType } from "@/types/Routine";
import { useState } from "react";
import styled from "styled-components";
import { useAddRoutine, useRoutine } from "@/hook/quires/routine";
import AddRoutineSuccessModal from "@components/modal/AddRoutineSuccessModal";
import AddRoutineBodyFooter from "./AddRoutineBodyFooter";
import AddRoutineBodyAddButton from "./AddRoutineBodyAddButton";
import AddRoutineBodyList from "./AddRoutineBodyList";
import { LabelInput, LabelSelect } from "ji-design-system";

export default function AddRoutineBody() {
  const { routine } = useRoutine();
  const { category } = useCategory();
  const [title, setTitle] = useState<string>("");
  const [categoryChange, setCategoryChange] = useState<string>("");
  const [exercise, setExercise] = useState<RoutineDataType[]>([]);
  const { addRoutine, addRoutineSuccess } = useAddRoutine();

  function handleAddExercise(
    title: string,
    kg: number,
    set: number,
    link: string
  ) {
    setExercise([...exercise, { title, kg, set, link }]);
  }

  function handleAddRoutine() {
    if (!routine) return;
    if (title === "" || categoryChange === "") return;
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
        $width="100%"
        placeholder="...제목"
        onChange={(e) => setTitle(e.target.value)}
      />
      <LabelSelect
        label="카테고리"
        placeholder="카테고리"
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
