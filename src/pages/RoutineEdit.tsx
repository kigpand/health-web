import { useRoutine } from "@/hook/quires/routine";
import { HeaderWrapper, PageWrapper } from "@/styles/PageStyle";
import RoutineEditContainer from "@components/routineEdit/RoutineEditContainer";
import styled from "styled-components";

export default function RoutineEdit() {
  const { routine } = useRoutine();
  return (
    <PageWrapper>
      <EditHeader>루틴 편집</EditHeader>
      {routine && <RoutineEditContainer routine={routine} />}
    </PageWrapper>
  );
}

const EditHeader = styled(HeaderWrapper)``;
