import { PATH } from "@/enum/path";
import { FooterWrapper } from "@/styles/PageStyle";
import { Button } from "ji-design-system";
import { useNavigate } from "react-router-dom";

export default function MainFooter() {
  const nav = useNavigate();

  return (
    <FooterWrapper>
      <Button
        style={{ width: "90%" }}
        func="secondary"
        label="루틴 추가"
        size="LG"
        onClick={() => nav(PATH.addRoutine)}
      />
    </FooterWrapper>
  );
}
