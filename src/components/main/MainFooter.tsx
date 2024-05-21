import Button from "@/common/button/Button";
import { PATH } from "@/enum/path";
import { FooterWrapper } from "@/styles/PageStyle";
import { useNavigate } from "react-router-dom";

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
