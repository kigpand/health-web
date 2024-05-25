import { PATH } from "@/enum/path";
import { HeaderWrapper } from "@/styles/PageStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MainHeader() {
  const nav = useNavigate();
  return (
    <HeaderWrapper>
      <span>오늘의 운동은?</span>
      <HomeButton onClick={() => nav(PATH.home)}>홈</HomeButton>
    </HeaderWrapper>
  );
}

const HomeButton = styled.div`
  position: absolute;
  right: 10px;
  font-size: 12px;
`;
