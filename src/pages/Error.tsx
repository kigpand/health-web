import { PATH } from "@/enum/path";
import { PageWrapper } from "@/styles/PageStyle";
import styled from "styled-components";

export default function Error() {
  function returnToHome() {
    window.location.replace(PATH.home);
  }

  return (
    <ErrorWrapper>
      <TitleStyled>알수 없는 오류가 발생했습니다.</TitleStyled>
      <PrevButton onClick={returnToHome}>홈화면으로</PrevButton>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled(PageWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
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
