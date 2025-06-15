import AddExerciseModal from "@components/modal/AddExerciseModal";
import { useState } from "react";

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
      <button
        className="border-none outline-none bg-white h-[35px] rounded-md"
        onClick={() => setAddExer(true)}
      >
        <span>운동 추가 +</span>
      </button>
      {addExer && (
        <AddExerciseModal
          handleAddExercise={handleAddExercise}
          handleCloseModal={() => setAddExer(false)}
        />
      )}
    </>
  );
}
