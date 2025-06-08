import { PATH } from "@/enum/path";
import { useRoutineDetail } from "@/hook/quires/routine";
import { FooterWrapper, PageWrapper } from "@/styles/PageStyle";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoutinePlayList from "./RoutinePlayList";
import { Button } from "ji-design-system";
import { HeaderWrapper } from "@/common/layout/HeaderWrapper";

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
  }, [currentRoutine]);

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
              style={{ width: "100%" }}
              func="primary"
              label="시작!"
              size="MD"
              onClick={() => setIsStart(true)}
            />
            <Button
              style={{ width: "100%" }}
              func="secondary"
              label="뒤로가기"
              size="MD"
              onClick={() => nav(PATH.routineMain)}
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
