import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import Input from "@/common/input/Input";
import { useAddCategory } from "@/hook/quires/category";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  handleCloseModal: () => void;
};

export default function AddCategoryModal({ handleCloseModal }: Props) {
  const [category, setCategory] = useState<string>("");
  const { addCategoryMutate, addCategorySuccess } = useAddCategory();

  useEffect(() => {
    if (addCategorySuccess) {
      console.log("success");
    }
  }, [addCategorySuccess]);

  function handleAddCategory() {
    addCategoryMutate({ category });
  }

  return (
    <ModalPortal
      component={
        <ModalContainer>
          <Title>추가할 카테고리를 입력해주세요</Title>
          <Input
            type="text"
            width="100%"
            placeholder="카테고리..."
            handleChange={(e) => setCategory(e.target.value)}
          />
          <Button
            width="100%"
            type="primary"
            text="추가"
            handleClick={handleAddCategory}
          />
        </ModalContainer>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}

const ModalContainer = styled.article`
  width: 300px;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-weight: bold;
`;
