import Button from "@/common/button/Button";
import LabelInput from "@/common/input/LabelInput";
import LabelSelectBox from "@/common/select/LabelSelectBox";
import { PATH } from "@/enum/path";
import { useCategory } from "@/hook/quires/category";
import { RoutineDataType } from "@/types/Routine";
import AddExerciseModal from "@components/modal/AddExerciseModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddRoutineBodyListItem from "./AddRoutineBodyListItem";
import { useAddRoutine, useRoutine } from "@/hook/quires/routine";
import AddRoutineSuccessModal from "@components/modal/AddRoutineSuccessModal";

export default function AddRoutineBody() {
  const nav = useNavigate();
  const { routine } = useRoutine();
  const { category } = useCategory();
  const [title, setTitle] = useState<string>("");
  const [categoryChange, setCategoryChange] = useState<string>("");
  const [addExer, setAddExer] = useState<boolean>(false);
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
      {exercise.length > 0 && (
        <AddExerciseList>
          <label>등록한 운동</label>
          <ul>
            {exercise.map((item) => {
              return <AddRoutineBodyListItem key={item.title} {...item} />;
            })}
          </ul>
        </AddExerciseList>
      )}
      <AddExerciseButton onClick={() => setAddExer(true)}>
        운동 추가 +
      </AddExerciseButton>
      <FooterWrapper>
        <Button
          width="100px"
          text="등록"
          type="primary"
          handleClick={handleAddRoutine}
        />
        <Button
          width="100px"
          text="취소"
          type="secondary"
          handleClick={() => nav(PATH.routineMain)}
        />
      </FooterWrapper>
      {addExer && (
        <AddExerciseModal
          handleAddExercise={handleAddExercise}
          handleCloseModal={() => setAddExer(false)}
        />
      )}
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

const AddExerciseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 12px;
    font-weight: bold;
  }

  ul {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const AddExerciseButton = styled.button`
  border: 1px solid black;
  outline: none;
  background-color: white;
  height: 35px;
`;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
