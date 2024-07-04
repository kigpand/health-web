import Button from "@/common/button/Button";
import { PATH } from "@/enum/path";
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
        width="100px"
        text="등록"
        type="primary"
        handleClick={handleAddRoutine}
      />
      <Button
        width="100px"
        text="취소"
        type="secondary"
        handleClick={() => nav(PATH.routineMain)}
      />
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
