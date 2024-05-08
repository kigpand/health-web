import { useRoutineDetail } from "@/hook/quires/routine";
import { HeaderWrapper, PageWrapper } from "@/styles/PageStyle";

export default function RoutineDetailContainer({ id }: { id: string }) {
  const { routineDetail } = useRoutineDetail(id);
  return (
    <PageWrapper>
      <HeaderWrapper>{routineDetail?.title}</HeaderWrapper>
    </PageWrapper>
  );
}
