import { useDeleteCategory } from "@/hook/quires/category";
import { useRoutineDeleteByCategory } from "@/hook/quires/routine";
import { CategoryType } from "@/types/CategoryType";
import styled from "styled-components";
import TwoButtonModal from "./TwoButtonModal";

type Props = {
  category: CategoryType;
  handleCloseModal: () => void;
};

export default function DeleteCategoryModal({
  category,
  handleCloseModal,
}: Props) {
  const { deleteCategoryMutate } = useDeleteCategory();
  const { deleteRoutineByCategoryMutate } = useRoutineDeleteByCategory();

  function handleDeleteButton() {
    deleteCategoryMutate({ category: category._id });
    deleteRoutineByCategoryMutate({ category: category.category });
    handleCloseModal();
  }

  return (
    <TwoButtonModal
      component={
        <Title>
          {category.category}를 삭제하시겠습니까?
          <br />
          카테고리에 등록된 루틴들도 삭제됩니다.
        </Title>
      }
      primaryText="예"
      primaryEvent={handleDeleteButton}
      secondaryText="아니오"
      secondaryEvent={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}

const Title = styled.header`
  font-weight: bold;
  line-height: 24px;
`;
