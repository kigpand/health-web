import axiosInstance from "@/utils/axiosSetting";

export async function getRecord(number: number) {
  const result = await axiosInstance.get("/record");

  return result.data;
}

type AddProps = {
  id: number;
  category: string;
  title: string;
};

export async function addRecordAPI({ id, title, category }: AddProps) {
  const result = await axiosInstance.post("/record/addRecord", {
    id,
    title,
    category,
  });

  return result.data;
}
