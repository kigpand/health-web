import { ROUTE } from "@/enum/path";
import { AddRoutineType, UpdateRoutineType } from "@/types/Routine";
import axiosInstance from "@/utils/axiosSetting";

export async function getRoutine() {
  const result = await axiosInstance.get(`${ROUTE.routine}`);
  return result.data;
}

export async function getRoutineDetail(id: string) {
  const result = await axiosInstance.get(`${ROUTE.routine}/${id}`);
  return result.data;
}

export async function getRoutineCount(count: number) {
  const result = await axiosInstance.get(`${ROUTE.routine}/count/${count}`);
  return result.data;
}

export async function getRoutineByCategory(category: string) {
  const result = await axiosInstance.get(
    `${ROUTE.routine}/category/${category}`
  );
  return result.data;
}

type AddRoutineProps = {
  id: number;
} & AddRoutineType;

export async function addRoutineAPI(props: AddRoutineProps) {
  const result = await axiosInstance.post(`${ROUTE.routine}/addRoutine`, {
    ...props,
  });
  return result.data;
}

export async function deleteRoutineAPI(id: number) {
  const result = await axiosInstance.delete(`${ROUTE.routine}/delete`, {
    data: { id },
  });

  return result.data;
}

export async function updateRoutineAPI(props: UpdateRoutineType) {
  const result = await axiosInstance.put(`${ROUTE.routine}/updateRoutine`, {
    ...props,
  });

  return result.data;
}

type CategoryProps = {
  category: string;
};

export async function deleteRoutineByCategory({ category }: CategoryProps) {
  const result = await axiosInstance.delete(
    `${ROUTE.routine}/deleteRoutineByCategory`,
    {
      data: { category },
    }
  );

  return result.data;
}
