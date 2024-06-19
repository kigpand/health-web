import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import { useRoutineCount } from "@/hook/quires/routine";
import { PageWrapper } from "@/styles/PageStyle";
import CheckRoutineBody from "@components/checkRoutine/CheckRoutineBody";
import CheckRoutineFooter from "@components/checkRoutine/CheckRoutineFooter";
import { useState } from "react";
import styled from "styled-components";

export default function CheckRoutine() {
  const [count, setCount] = useState<number>(3);
  const { routineCount } = useRoutineCount(count);

  return (
    <CheckRoutineWrapper>
      <HomeButtonHeader title="최근 루틴 조회" />
      {routineCount && (
        <CheckRoutineBody
          count={count}
          routineCount={routineCount}
          handleChangeSelect={(value) => setCount(value)}
        />
      )}
      {routineCount && (
        <CheckRoutineFooter count={count} routineCount={routineCount} />
      )}
    </CheckRoutineWrapper>
  );
}

const CheckRoutineWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
`;
