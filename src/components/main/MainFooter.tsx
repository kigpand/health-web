import Button from "@/common/button/Button";
import { PATH } from "@/enum/path";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MainFooter() {
  const nav = useNavigate();

  return (
    <FooterWrapper>
      <Button
        type="primary"
        width="90%"
        text="루틴 추가"
        handleClick={() => nav(PATH.addRoutine)}
      />
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;
