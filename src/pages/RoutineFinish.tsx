import { HeaderWrapper } from "@/common/layout/HeaderWrapper";
import { PATH } from "@/enum/path";
import { FooterWrapper, PageWrapper } from "@/styles/PageStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RoutineFinish() {
  const nav = useNavigate();
  return (
    <PageWrapper>
      <HeaderWrapper>운동 끝!</HeaderWrapper>
      <RoutineFinishWrapper>
        <FinishButton onClick={() => nav(PATH.routineMain)}>
          처음으로
        </FinishButton>
      </RoutineFinishWrapper>
      <Footer>고생하셨습니다!</Footer>
    </PageWrapper>
  );
}

const FinishButton = styled.button`
  width: 150px;
  height: 70px;
  outline: none;
  border: none;
  background-color: #45bbff;
  color: white;
  font-size: 18px;
  border-radius: 12px;
`;

const RoutineFinishWrapper = styled(PageWrapper)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled(FooterWrapper)`
  padding: 20px 0px;
  font-size: 18px;
  font-weight: bold;
  background-color: white;
`;
