import { ROUTE } from "@/enum/path";
import axiosInstance from "@/utils/axiosSetting";

export async function getRecord(number: number) {
  const result = await axiosInstance.get(`${ROUTE.record}/count/${number}`);

  return result.data;
}

type AddProps = {
  id: number;
  category: string;
  title: string;
};

export async function addRecordAPI({ id, title, category }: AddProps) {
  const result = await axiosInstance.post(`${ROUTE.record}/addRecord`, {
    id,
    title,
    category,
  });

  return result.data;
}

export async function deleteRecordAll() {
  const result = await axiosInstance.delete(`${ROUTE.record}/deleteAll`);

  return result.data;
}
