import MainBody from "@components/main/MainBody";
import MainFooter from "@components/main/MainFooter";
import { PageWrapper } from "@/styles/PageStyle";
import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import { useCategory } from "@/hook/quires/category";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/enum/path";

const Main = () => {
  const { category } = useCategory();
  const nav = useNavigate();

  if (category && category.length === 0) {
    return (
      <NoneCategory>
        <TitleStyled>카테고리가 없습니다.</TitleStyled>
        <PrevButton onClick={() => nav(PATH.category)}>
          카테고리 등록하러가기
        </PrevButton>
      </NoneCategory>
    );
  }

  return (
    <PageWrapper>
      <HomeButtonHeader title="오늘의 운동은?" />
      {category && <MainBody category={category} />}
      <MainFooter />
    </PageWrapper>
  );
};

export default Main;

const NoneCategory = styled(PageWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  gap: 40px;
`;

const TitleStyled = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: white;
`;

const PrevButton = styled.div`
  background-color: white;
  padding: 18px 24px;
  border-radius: 8px;
  font-weight: bold;
`;
