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
    <PageWrapper>
      <HeaderWrapper>{routineDetail?.title}</HeaderWrapper>
      <UlContainer>
        <StartButton onClick={() => setIsTimer(true)}>start!!</StartButton>
        <label>루틴 리스트</label>
        {routineDetail?.routine.map((routine) => {
          return <ListWrapper key={routine.title}>{routine.title}</ListWrapper>;
        })}
      </UlContainer>
      <FooterWrapper onClick={() => nav(PATH.routineMain)}>
        이전으로
      </FooterWrapper>
      {isTimer && (
        <TimerSetModal id={id} handleCloseModal={() => setIsTimer(false)} />
      )}
    </PageWrapper>
  );
}

const UlContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
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
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: skyblue;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  padding: 10px;
  animation: anim 0.5s infinite alternate;
  cursor: pointer;

  @keyframes anim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 18px 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;
