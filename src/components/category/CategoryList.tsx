import { useCategory } from "@/hook/quires/category";
import { CategoryType } from "@/types/CategoryType";
import DeleteCategoryModal from "@components/modal/DeleteCategoryModal";
import { useState } from "react";
import styled from "styled-components";

export default function CategoryList() {
  const [deleteItem, setDeleteItem] = useState<CategoryType | null>(null);
  const { category } = useCategory();

  function handleDeleteButton(category: CategoryType) {
    setDeleteItem(category);
  }

  return (
    <ListWrapper>
      {category?.map((item) => {
        return (
          <ListStyled key={item._id}>
            <ListTitle>{item.category}</ListTitle>
            <DeleteButton onClick={() => handleDeleteButton(item)}>
              삭제
            </DeleteButton>
          </ListStyled>
        );
      })}
      {deleteItem && (
        <DeleteCategoryModal
          category={deleteItem}
          handleCloseModal={() => setDeleteItem(null)}
        />
      )}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
`;

const ListStyled = styled.li`
  width: 100%;
  display: flex;
  gap: 8px;
`;

const ListTitle = styled.div`
  padding: 12px 0px 12px 10px;
  background-color: white;
  border-radius: 8px;
  flex-grow: 1;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: red;
  color: white;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
`;
