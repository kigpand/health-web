import { FooterWrapper } from "@/styles/PageStyle";
import AddCategoryModal from "@components/modal/AddCategoryModal";
import { useState } from "react";
import styled from "styled-components";

export default function CategoryFooter() {
  const [isAddCategory, setIsAddCategory] = useState<boolean>(false);
  return (
    <Footer>
      <ButtonWrapper onClick={() => setIsAddCategory(true)}>
        카테고리 추가
      </ButtonWrapper>
      {isAddCategory && (
        <AddCategoryModal handleCloseModal={() => setIsAddCategory(false)} />
      )}
    </Footer>
  );
}

const Footer = styled(FooterWrapper)`
  padding: 12px 0px;
`;

const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  background-color: white;
  padding: 10px 0px;
  width: 80%;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;
