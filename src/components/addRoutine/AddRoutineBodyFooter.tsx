import { PATH } from "@/enum/path";
import { Button } from "ji-design-system";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  handleAddRoutine: () => void;
};

export default function AddRoutineBodyFooter({ handleAddRoutine }: Props) {
  const nav = useNavigate();

  return (
    <FooterWrapper>
      <Button
        label="등록"
        func="primary"
        size="MD"
        onClick={handleAddRoutine}
      />
      <Button
        label="취소"
        func="secondary"
        size="MD"
        onClick={() => nav(PATH.routineMain)}
      />
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
