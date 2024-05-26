import SelectBox from "@/common/select/SelectBox";
import { useRoutineCount } from "@/hook/quires/routine";
import { PageWrapper } from "@/styles/PageStyle";
import CheckRoutineBody from "@components/checkRoutine/CheckRoutineBody";
import CheckRoutineFooter from "@components/checkRoutine/CheckRoutineFooter";
import CheckRoutineHeader from "@components/checkRoutine/CheckRoutineHeader";
import { useState } from "react";
import styled from "styled-components";

export default function CheckRoutine() {
  const [count, setCount] = useState<number>(3);
  const { routineCount } = useRoutineCount(count);

  return (
    <CheckRoutineWrapper>
      <CheckRoutineHeader />
      {routineCount && (
        <CheckRoutineBody
          count={count}
          routineCount={routineCount}
          handleChangeSelect={(value) => setCount(value)}
        />
      )}
      <CheckRoutineFooter />
    </CheckRoutineWrapper>
  );
}

const CheckRoutineWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
`;
