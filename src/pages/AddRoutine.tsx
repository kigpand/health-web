import { PageWrapper } from "@/styles/PageStyle";
import AddRoutineBody from "@components/addRoutine/AddRoutineBody";
import AddRoutineHeader from "@components/addRoutine/AddRoutineHeader";

export default function AddRoutine() {
  return (
    <PageWrapper>
      <AddRoutineHeader />
      <AddRoutineBody />
    </PageWrapper>
  );
}
