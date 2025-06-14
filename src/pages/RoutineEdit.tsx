import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import { useRoutine } from "@/hook/quires/routine";
import RoutineEditContainer from "@components/routineEdit/RoutineEditContainer";

export default function RoutineEdit() {
  const { routine } = useRoutine();
  return (
    <section className="page_layout">
      <HomeButtonHeader title="루틴 편집" />
      {routine && <RoutineEditContainer routine={routine} />}
    </section>
  );
}
