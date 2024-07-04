import styled from "styled-components";
import AddRoutineBodyListItem from "./AddRoutineBodyListItem";
import { RoutineDataType } from "@/types/Routine";

type Props = {
  exercise: RoutineDataType[];
};

export default function AddRoutineBodyList({ exercise }: Props) {
  return (
    <AddExerciseList>
      <label>등록한 운동</label>
      <ul>
        {exercise.map((item) => {
          return <AddRoutineBodyListItem key={item.title} {...item} />;
        })}
      </ul>
    </AddExerciseList>
  );
}

const AddExerciseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

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
