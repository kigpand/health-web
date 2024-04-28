import { getCategory } from "@/service/category";
import { CategoryType } from "@/types/CategoryType";
import { useQuery } from "@tanstack/react-query";

export function useCategory() {
  const { data: category } = useQuery<CategoryType[]>({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  return { category };
}
