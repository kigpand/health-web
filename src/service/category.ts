import { ROUTE } from "@/enum/path";
import axiosInstance from "@/utils/axiosSetting";

export async function getCategory() {
  const result = await axiosInstance.get(`${ROUTE.category}`);
  return result.data;
}

export async function getDuplCategory(category: string) {
  const result = await axiosInstance.get(`${ROUTE.category}/${category}`);
  return result.data;
}

type CategoryProps = {
  category: string;
};

export async function addCategory({ category }: CategoryProps) {
  const result = await axiosInstance.post(`${ROUTE.category}/addCategory`, {
    category,
  });
  return result.data;
}

export async function deleteCategory({ category }: CategoryProps) {
  const result = await axiosInstance.delete(
    `${ROUTE.category}/deleteCategory`,
    {
      data: { category },
    }
  );

  return result.data;
}
