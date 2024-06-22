import Button from "@/common/button/Button";
import { PATH } from "@/enum/path";
import { useRoutineDetail } from "@/hook/quires/routine";
import { FooterWrapper, HeaderWrapper, PageWrapper } from "@/styles/PageStyle";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoutinePlayList from "./RoutinePlayList";

type Props = {
  id: string;
  timer: number;
};

export default function RoutinePlayContainer({ id, timer }: Props) {
  const nav = useNavigate();
  const [isStart, setIsStart] = useState<boolean>(false);
  const { routineDetail } = useRoutineDetail(id);
  const [currentRoutine, setCurrentRoutine] = useState<number>(0);

  const handleNextRoutine = useCallback(() => {
    setCurrentRoutine(currentRoutine + 1);
  }, []);

  function handleCloseExercise() {
    setCurrentRoutine(0);
    nav(PATH.routineMain);
  }

  return (
    <PageWrapper>
      <HeaderWrapper>{isStart ? routineDetail?.title : "Play!"}</HeaderWrapper>
      {isStart && routineDetail ? (
        <RoutinePlayList
          currentRoutine={currentRoutine}
          routineDetail={routineDetail}
          timer={timer}
          handleNextRoutine={handleNextRoutine}
        />
      ) : (
        <ContainerWrapper>
          <Title>
            선택한 루틴은
            <span style={{ color: "red" }}> {routineDetail?.title}</span>입니다.
          </Title>
          <ButtonWrapper>
            <Button
              width="100%"
              type="primary"
              text="시작!"
              handleClick={() => setIsStart(true)}
            />
            <Button
              width="100%"
              type="black"
              text="뒤로가기"
              handleClick={() => nav(PATH.routineMain)}
            />
          </ButtonWrapper>
        </ContainerWrapper>
      )}
      <Footer onClick={handleCloseExercise}>운동 종료</Footer>
    </PageWrapper>
  );
}

const ContainerWrapper = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 150px;
`;

const Footer = styled(FooterWrapper)`
  background-color: white;
  padding: 20px 0px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 18px;
`;
