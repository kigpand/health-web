import { addCategory, getCategory } from "@/service/category";
import { CategoryType } from "@/types/CategoryType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCategory() {
  const { data: category } = useQuery<CategoryType[]>({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  return { category };
}

export function useAddCategory() {
  const queryClient = useQueryClient();
  const { mutate: addCategoryMutate, isSuccess: addCategorySuccess } =
    useMutation({
      mutationKey: ["addCategory"],
      mutationFn: addCategory,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["category"],
        });
      },
    });

  return { addCategoryMutate, addCategorySuccess };
}
