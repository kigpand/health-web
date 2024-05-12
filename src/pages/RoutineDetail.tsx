import { PATH } from "@/enum/path";
import RoutineDetailContainer from "@components/routineDetail/RoutineDetailContainer";
import { Navigate, useSearchParams } from "react-router-dom";

export default function RoutineDetail() {
  const [searchParams] = useSearchParams();

  if (!searchParams.get("id") || searchParams.get("id") === "") {
    return <Navigate to={PATH.error} />;
  }

  return <RoutineDetailContainer id={searchParams.get("id")!} />;
}
