import { useCategory } from "@/hook/quires/category";
import { CategoryType } from "@/types/CategoryType";
import DeleteCategoryModal from "@components/modal/DeleteCategoryModal";
import { useState } from "react";

export default function CategoryList() {
  const [deleteItem, setDeleteItem] = useState<CategoryType | null>(null);
  const { category } = useCategory();

  function handleDeleteButton(category: CategoryType) {
    setDeleteItem(category);
  }

  return (
    <ul className="grow flex flex-col gap-3 p-6">
      {category?.map((item) => {
        return (
          <li key={item._id} className="w-full flex gap-2">
            <label className="py-3 pl-2 bg-white rounded-xl grow">
              {item.category}
            </label>
            <button
              className="py-2 px-4 bg-red-500 text-white border-none outline-none rounded-xl"
              onClick={() => handleDeleteButton(item)}
            >
              삭제
            </button>
          </li>
        );
      })}
      {deleteItem && (
        <DeleteCategoryModal
          category={deleteItem}
          handleCloseModal={() => setDeleteItem(null)}
        />
      )}
    </ul>
  );
}
