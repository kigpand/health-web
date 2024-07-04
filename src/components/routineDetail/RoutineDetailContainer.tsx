import { PATH } from "@/enum/path";
import { useRoutineDetail } from "@/hook/quires/routine";
import { HeaderWrapper, PageWrapper } from "@/styles/PageStyle";
import TimerSetModal from "@components/modal/TimerSetModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RoutineDetailContainer({ id }: { id: string }) {
  const { routineDetail } = useRoutineDetail(id);
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const nav = useNavigate();

  return (
    <Container>
      <HeaderWrapper>{routineDetail?.title}</HeaderWrapper>
      <UlContainer>
        <label>루틴 리스트</label>
        {routineDetail?.routine.map((routine) => {
          return <ListWrapper key={routine.title}>{routine.title}</ListWrapper>;
        })}
      </UlContainer>
      <StartButton onClick={() => setIsTimer(true)}>start!!</StartButton>
      <FooterWrapper onClick={() => nav(PATH.routineMain)}>
        이전으로
      </FooterWrapper>
      {isTimer && (
        <TimerSetModal id={id} handleCloseModal={() => setIsTimer(false)} />
      )}
    </Container>
  );
}

const Container = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UlContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  position: relative;

  label {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const ListWrapper = styled.li`
  width: 90%;
  background-color: white;
  padding: 18px 5px;
  text-align: center;
  border-radius: 8px;
`;

const StartButton = styled.div`
  background-color: #00b7ff;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 90%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const FooterWrapper = styled.footer`
  width: 90%;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;
