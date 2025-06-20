import FooterWrapper from "@/common/layout/FooterWrapper";
import { PATH } from "@/enum/path";
import { Button } from "ji-design-system";
import { useNavigate } from "react-router-dom";

export default function RoutineMainFooter() {
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
