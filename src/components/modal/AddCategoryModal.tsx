import ModalPortal from "@/ModalPortal";
import { useAddCategory } from "@/hook/quires/category";
import { getDuplCategory } from "@/service/category";
import { Button, Input } from "ji-design-system";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  handleCloseModal: () => void;
};

export default function AddCategoryModal({ handleCloseModal }: Props) {
  const [category, setCategory] = useState<string>("");
  const { addCategoryMutate } = useAddCategory();

  async function handleAddCategory() {
    if (category === "") return;
    const dupl = await getDuplCategory(category);
    if (dupl.category === "empty") {
      addCategoryMutate({ category });
      handleCloseModal();
    } else {
      alert("카테고리가 중복되었습니다.");
    }
  }

  return (
    <ModalPortal
      component={
        <ModalContainer>
          <Title>추가할 카테고리를 입력해주세요</Title>
          <Input
            type="text"
            $width="100%"
            placeholder="카테고리..."
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button
            style={{ width: "100%" }}
            func="primary"
            label="추가"
            size="MD"
            onClick={handleAddCategory}
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
