import { AddRoutineType } from "@/types/Routine";
import axiosInstance from "@/utils/axiosSetting";

export async function getRoutine() {
  const result = await axiosInstance.get("/routine");
  return result.data;
}

type AddRoutineProps = {
  id: number;
} & AddRoutineType;

export async function addRoutineAPI(props: AddRoutineProps) {
  const result = await axiosInstance.post("/routine/addRoutine", { ...props });
  return result.data;
}
