import {
  addRoutineAPI,
  getRoutine,
  getRoutineCount,
  getRoutineDetail,
} from "@/service/routine";
import { RoutineListType } from "@/types/Routine";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useRoutine() {
  const { data: routine, isSuccess: routineSuccess } = useQuery<
    RoutineListType[]
  >({
    queryKey: ["routine"],
    queryFn: getRoutine,
  });

  return { routine, routineSuccess };
}

export function useRoutineDetail(id: string) {
  const { data: routineDetail } = useQuery<RoutineListType>({
    queryKey: ["routineDetail", id],
    queryFn: () => getRoutineDetail(id),
  });

  return { routineDetail };
}

export function useRoutineCount(count: number) {
  const { data: routineCount } = useQuery<RoutineListType[]>({
    queryKey: ["routineCount", count],
    queryFn: () => getRoutineCount(count),
  });

  return { routineCount };
}

export function useAddRoutine() {
  const queryClient = useQueryClient();
  const { mutate: addRoutine, isSuccess: addRoutineSuccess } = useMutation({
    mutationKey: ["addRoutine"],
    mutationFn: addRoutineAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["routine"],
      });
    },
  });

  return { addRoutine, addRoutineSuccess };
}
