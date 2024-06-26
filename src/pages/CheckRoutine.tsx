import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import { useRecord } from "@/hook/quires/record";
import { useRoutineCount } from "@/hook/quires/routine";
import { PageWrapper } from "@/styles/PageStyle";
import CheckRoutineBody from "@components/checkRoutine/CheckRoutineBody";
import CheckRoutineFooter from "@components/checkRoutine/CheckRoutineFooter";
import { useState } from "react";
import styled from "styled-components";

export default function CheckRoutine() {
  const [count, setCount] = useState<number>(3);
  const { record } = useRecord(count);

  return (
    <CheckRoutineWrapper>
      <HomeButtonHeader title="최근 루틴 조회" />
      {record && (
        <CheckRoutineBody
          count={count}
          record={record}
          handleChangeSelect={(value) => setCount(value)}
        />
      )}
      {record && <CheckRoutineFooter count={count} record={record} />}
    </CheckRoutineWrapper>
  );
}

const CheckRoutineWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
`;
