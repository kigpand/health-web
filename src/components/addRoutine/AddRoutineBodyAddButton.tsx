import AddExerciseModal from "@components/modal/AddExerciseModal";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  handleAddExercise: (
    title: string,
    kg: number,
    set: number,
    link: string
  ) => void;
};

export default function AddRoutineBodyAddButton({ handleAddExercise }: Props) {
  const [addExer, setAddExer] = useState<boolean>(false);

  return (
    <>
      <AddExerciseButton onClick={() => setAddExer(true)}>
        <span>운동 추가 +</span>
      </AddExerciseButton>
      {addExer && (
        <AddExerciseModal
          handleAddExercise={handleAddExercise}
          handleCloseModal={() => setAddExer(false)}
        />
      )}
    </>
  );
}

const AddExerciseButton = styled.button`
  border: 1px solid black;
  outline: none;
  background-color: white;
  height: 35px;
`;
