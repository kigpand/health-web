import RoutineDetailContainer from "@components/routineDetail/RoutineDetailContainer";
import { useSearchParams } from "react-router-dom";

export default function RoutineDetail() {
  const [searchParams] = useSearchParams();

  if (!searchParams.get("id") || searchParams.get("id") === "") {
    return <div>잘못됨</div>;
  }

  return <RoutineDetailContainer id={searchParams.get("id")!} />;
}
