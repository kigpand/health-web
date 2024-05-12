import { useRoutineDetail } from "@/hook/quires/routine";
import { useTimer } from "@/hook/useTimer";
import { PageWrapper } from "@/styles/PageStyle";
import { useEffect } from "react";
import styled from "styled-components";

type Props = {
  id: string;
  timer: number;
};

export default function RoutinePlayContainer({ id, timer }: Props) {
  const { routineDetail } = useRoutineDetail(id);
  const { time } = useTimer({ timer });

  useEffect(() => {
    console.log(time);
  }, [time]);

  return <PageWrapper></PageWrapper>;
}
