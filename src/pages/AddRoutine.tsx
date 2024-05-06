import AddRoutineBody from "@components/addRoutine/AddRoutineBody";
import AddRoutineHeader from "@components/addRoutine/AddRoutineHeader";
import styled from "styled-components";

export default function AddRoutine() {
  return (
    <AddRoutineWrapper>
      <AddRoutineHeader />
      <AddRoutineBody />
    </AddRoutineWrapper>
  );
}

const AddRoutineWrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;
