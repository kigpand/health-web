import { PATH } from "@/enum/path";
import {
  addRoutineAPI,
  deleteRoutineAPI,
  deleteRoutineByCategory,
  getRoutine,
  getRoutineByCategory,
  getRoutineCount,
  getRoutineDetail,
  updateRoutineAPI,
} from "@/service/routine";
import { RoutineListType } from "@/types/Routine";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useRoutine() {
  const { data: routine, isSuccess: routineSuccess } = useSuspenseQuery<
    RoutineListType[]
  >({
    queryKey: ["routine"],
    queryFn: getRoutine,
  });

  return { routine, routineSuccess };
}

export function useRoutineByCategory(category: string) {
  const { data: routineByCategory } = useSuspenseQuery<RoutineListType[]>({
    queryKey: ["routineByCategory", category],
    queryFn: () => getRoutineByCategory(category),
  });

  return { routineByCategory };
}

export function useRoutineDetail(id: string) {
  const { data: routineDetail } = useSuspenseQuery<RoutineListType>({
    queryKey: ["routineDetail", id],
    queryFn: () => getRoutineDetail(id),
  });

  return { routineDetail };
}

export function useRoutineCount(count: number) {
  const { data: routineCount } = useSuspenseQuery<RoutineListType[]>({
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

export function useRoutineDelete() {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deleteRoutine } = useMutation({
    mutationKey: ["deleteRoutine"],
    mutationFn: deleteRoutineAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["routine"],
      });
      nav(PATH.routineEdit);
    },
  });

  return { deleteRoutine };
}

export function useRoutineDeleteByCategory() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteRoutineByCategoryMutate,
    isSuccess: deleteRoutineByCategorySuccess,
  } = useMutation({
    mutationKey: ["deleteRoutineByCategory"],
    mutationFn: deleteRoutineByCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["routine"],
      });
    },
  });

  return { deleteRoutineByCategoryMutate, deleteRoutineByCategorySuccess };
}

export function useRoutineUpdate() {
  const queryClient = useQueryClient();
  const { mutate: updateRoutine, isSuccess: updateSuccess } = useMutation({
    mutationKey: ["updateRoutine"],
    mutationFn: updateRoutineAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["routine"],
      });
    },
  });

  return { updateRoutine, updateSuccess };
}
