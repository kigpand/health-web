import { HeaderWrapper } from "@/common/layout/HeaderWrapper";
import { PageWrapper } from "@/styles/PageStyle";
import AddRoutineBody from "@components/addRoutine/AddRoutineBody";

export default function AddRoutine() {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <div>루틴 추가</div>
      </HeaderWrapper>
      <AddRoutineBody />
    </PageWrapper>
  );
}
