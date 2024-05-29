import { FooterWrapper } from "@/styles/PageStyle";
import { RoutineListType } from "@/types/Routine";
import CheckRoutineModal from "@components/modal/CheckRoutineModal";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  routineCount: RoutineListType[];
};

export default function CheckRoutineFooter({ routineCount }: Props) {
  const [isCheckRoutine, setIsCheckRoutine] = useState<boolean>(false);
  return (
    <CheckFooter>
      <button onClick={() => setIsCheckRoutine(true)}>분석하기</button>
      {isCheckRoutine && (
        <CheckRoutineModal
          routineCount={routineCount}
          handleCloseModal={() => setIsCheckRoutine(false)}
        />
      )}
    </CheckFooter>
  );
}

const CheckFooter = styled(FooterWrapper)`
  padding: 16px;

  button {
    background-color: #2cc3ff;
    padding: 14px;
    border: none;
    outline: none;
    color: white;
    border-radius: 12px;
  }
`;
