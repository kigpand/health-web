import { addCategory, deleteCategory, getCategory } from "@/service/category";
import { CategoryType } from "@/types/CategoryType";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export function useCategory() {
  const { data: category } = useSuspenseQuery<CategoryType[]>({
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

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteCategoryMutate, isSuccess: deleteCategorySuccess } =
    useMutation({
      mutationKey: ["deleteCategory"],
      mutationFn: deleteCategory,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["category"],
        });
      },
    });

  return { deleteCategoryMutate, deleteCategorySuccess };
}
