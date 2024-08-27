import { PATH } from "@/enum/path";
import { PageWrapper } from "@/styles/PageStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  const nav = useNavigate();

  return (
    <HomeWrapper>
      <HomeButton onClick={() => nav(PATH.routineMain)}>운동하기</HomeButton>
      <HomeButton onClick={() => nav(PATH.checkRoutine)}>
        최근 루틴 조회
      </HomeButton>
      <HomeButton onClick={() => nav(PATH.routineEdit)}>루틴 편집</HomeButton>
      <HomeButton onClick={() => nav(PATH.category)}>카테고리 편집</HomeButton>
    </HomeWrapper>
  );
}

const HomeWrapper = styled(PageWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const HomeButton = styled.button`
  width: 90%;
  padding: 16px 0px;
  font-weight: bold;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 16px;
`;
