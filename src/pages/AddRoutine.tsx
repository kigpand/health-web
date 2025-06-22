import { HeaderWrapper } from "@/common/layout/HeaderWrapper";
import AddRoutineBody from "@components/addRoutine/AddRoutineBody";

export default function AddRoutine() {
  return (
    <section className="page_layout">
      <HeaderWrapper>루틴 추가</HeaderWrapper>
      <AddRoutineBody />
    </section>
  );
}
