import axiosInstance from "@/utils/axiosSetting";

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
