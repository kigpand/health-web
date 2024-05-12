import { PATH } from "@/enum/path";
import RoutinePlayContainer from "@components/routinePlay/RoutinePlayContainer";
import { Navigate, useSearchParams } from "react-router-dom";

export default function RoutinePlay() {
  const [searchParams] = useSearchParams();

  if (!searchParams.get("id") || searchParams.get("id") === "") {
    return <Navigate to={PATH.error} />;
  }

  return (
    <RoutinePlayContainer
      id={searchParams.get("id")!}
      timer={searchParams.get("timer") ? Number(searchParams.get("timer")) : 0}
    />
  );
}
