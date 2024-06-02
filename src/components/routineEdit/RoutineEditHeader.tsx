import { PATH } from "@/enum/path";
import { HeaderWrapper } from "@/styles/PageStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RoutineEditHeader() {
  const nav = useNavigate();
  return (
    <HeaderWrapper>
      <span>루틴 편집</span>
      <HomeButton onClick={() => nav(PATH.home)}>홈</HomeButton>
    </HeaderWrapper>
  );
}

const HomeButton = styled.div`
  position: absolute;
  right: 10px;
  font-size: 12px;
`;
