import { AddRoutineType } from "@/types/Routine";
import axiosInstance from "@/utils/axiosSetting";

export async function getRoutine() {
  const result = await axiosInstance.get("/routine");
  return result.data;
}

export async function getRoutineDetail(id: string) {
  const result = await axiosInstance.get(`/routine/${id}`);
  return result.data;
}

export async function getRoutineCount(count: number) {
  const result = await axiosInstance.get(`/routine/count/${count}`);
  return result.data;
}

type AddRoutineProps = {
  id: number;
} & AddRoutineType;

export async function addRoutineAPI(props: AddRoutineProps) {
  const result = await axiosInstance.post("/routine/addRoutine", { ...props });
  return result.data;
}

export async function deleteRoutineAPI(id: number) {
  const result = await axiosInstance.delete("/routine/delete", {
    data: { id },
  });

  return result.data;
}
