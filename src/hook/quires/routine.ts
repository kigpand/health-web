import { getRoutine } from "@/service/routine";
import { RoutineListType } from "@/types/Routine";
import { useQuery } from "@tanstack/react-query";

export function useRoutine() {
  const { data: routine, isSuccess: routineSuccess } = useQuery<
    RoutineListType[]
  >({
    queryKey: ["routine"],
    queryFn: getRoutine,
  });

  return { routine, routineSuccess };
}
