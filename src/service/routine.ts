import { AddRoutineType } from "@/types/Routine";
import axiosInstance from "@/utils/axiosSetting";

export async function getRoutine() {
  const result = await axiosInstance.get("/routine");
  return result.data;
}

export async function addRoutine(props: AddRoutineType) {
  const result = await axiosInstance.post("/addRoutine", props);
  return result.data;
}
