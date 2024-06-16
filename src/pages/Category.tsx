import { PATH } from "@/enum/path";
import { HeaderWrapper, PageWrapper } from "@/styles/PageStyle";
import CategoryFooter from "@components/category/CategoryFooter";
import CategoryList from "@components/category/CategoryList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Category() {
  const nav = useNavigate();

  return (
    <CategoryWrapper>
      <HeaderWrapper>
        <span>카테고리 편집</span>
        <HomeButton onClick={() => nav(PATH.home)}>홈</HomeButton>
      </HeaderWrapper>
      <CategoryList />
      <CategoryFooter />
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled(PageWrapper)``;

const HomeButton = styled.div`
  position: absolute;
  right: 10px;
  font-size: 12px;
`;
