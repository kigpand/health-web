import { PATH } from "@/enum/path";
import { HeaderWrapper } from "@/styles/PageStyle";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HomeButtonHeader({ title }: { title: string }) {
  const nav = useNavigate();

  return (
    <HeaderWrapper>
      <span>{title}</span>
      <HomeButton onClick={() => nav(PATH.home)} />
    </HeaderWrapper>
  );
}

const HomeButton = styled(FaHome)`
  position: absolute;
  right: 10px;
  font-size: 20px;
`;
