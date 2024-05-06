import axiosInstance from "@/utils/axiosSetting";

export async function getCategory() {
  const result = await axiosInstance.get("/category");
  return result.data;
}
