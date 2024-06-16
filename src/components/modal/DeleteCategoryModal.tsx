import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import { useDeleteCategory } from "@/hook/quires/category";
import { useRoutineDeleteByCategory } from "@/hook/quires/routine";
import { CategoryType } from "@/types/CategoryType";
import styled from "styled-components";

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
    <ModalPortal
      component={
        <ModalWrapper>
          <Title>
            {category.category}를 삭제하시겠습니까?
            <br />
            카테고리에 등록된 루틴들도 삭제됩니다.
          </Title>
          <ButtonWrapper>
            <Button
              width="100%"
              text="예"
              type="primary"
              handleClick={handleDeleteButton}
            />
            <Button
              width="100%"
              text="아니오"
              type="secondary"
              handleClick={handleCloseModal}
            />
          </ButtonWrapper>
        </ModalWrapper>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}

const ModalWrapper = styled.article`
  width: 300px;
  padding: 24px;
  border-radius: 8px;
  background-color: white;
`;

const Title = styled.header`
  font-weight: bold;
  line-height: 24px;
`;

const ButtonWrapper = styled.footer`
  margin-top: 30px;
  display: flex;
  gap: 8px;
`;
