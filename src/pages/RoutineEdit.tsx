import { useRoutine } from "@/hook/quires/routine";
import { PageWrapper } from "@/styles/PageStyle";
import RoutineEditContainer from "@components/routineEdit/RoutineEditContainer";
import RoutineEditHeader from "@components/routineEdit/RoutineEditHeader";

export default function RoutineEdit() {
  const { routine } = useRoutine();
  return (
    <PageWrapper>
      <RoutineEditHeader />
      {routine && <RoutineEditContainer routine={routine} />}
    </PageWrapper>
  );
}
