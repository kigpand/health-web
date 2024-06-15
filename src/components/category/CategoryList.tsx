import { useCategory } from "@/hook/quires/category";
import styled from "styled-components";

export default function CategoryList() {
  const { category } = useCategory();
  return (
    <ListWrapper>
      {category?.map((item) => {
        return (
          <ListStyled key={item._id}>
            <ListTitle>{item.category}</ListTitle>
            <DeleteButton>삭제</DeleteButton>
          </ListStyled>
        );
      })}
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
