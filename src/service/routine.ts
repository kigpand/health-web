import axiosInstance from "@/utils/axiosSetting";

export async function getRoutine() {
  const result = await axiosInstance.get("/routine");
  return result.data;
}
