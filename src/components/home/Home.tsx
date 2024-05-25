import { PATH } from "@/enum/path";
import { PageWrapper } from "@/styles/PageStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  const nav = useNavigate();

  return (
    <HomeWrapper>
      <ExerciseButton onClick={() => nav(PATH.routineMain)}>
        운동하기
      </ExerciseButton>
      <CheckButton>운동조회</CheckButton>
    </HomeWrapper>
  );
}

const HomeWrapper = styled(PageWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Button = styled.button`
  width: 90%;
  padding: 16px 0px;
  font-weight: bold;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 16px;
`;

const ExerciseButton = styled(Button)``;

const CheckButton = styled(Button)``;
