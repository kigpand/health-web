import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import { useRecord } from "@/hook/quires/record";
import CheckRoutineBody from "@components/checkRoutine/CheckRoutineBody";
import CheckRoutineFooter from "@components/checkRoutine/CheckRoutineFooter";
import { useState } from "react";

export default function CheckRoutine() {
  const [count, setCount] = useState<number>(3);
  const { record } = useRecord(count);

  return (
    <section className="page_layout">
      <HomeButtonHeader title="최근 루틴 조회" />
      {record && (
        <CheckRoutineBody
          count={count}
          record={record}
          handleChangeSelect={(value) => setCount(value)}
        />
      )}
      {record && <CheckRoutineFooter count={count} record={record} />}
    </section>
  );
}
