import { HeaderWrapper, PageWrapper } from "@/styles/PageStyle";
import CategoryList from "@components/category/CategoryList";
import styled from "styled-components";

export default function Category() {
  return (
    <CategoryWrapper>
      <HeaderWrapper>카테고리 편집</HeaderWrapper>
      <CategoryList />
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled(PageWrapper)``;
