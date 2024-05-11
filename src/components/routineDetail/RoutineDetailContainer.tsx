import { PATH } from "@/enum/path";
import { useRoutineDetail } from "@/hook/quires/routine";
import { HeaderWrapper, PageWrapper } from "@/styles/PageStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RoutineDetailContainer({ id }: { id: string }) {
  const { routineDetail } = useRoutineDetail(id);
  const nav = useNavigate();

  if (!routineDetail) return <div onClick={() => nav(PATH.home)}>이전으로</div>;

  return (
    <PageWrapper>
      <HeaderWrapper>{routineDetail?.title}</HeaderWrapper>
      <UlContainer>
        <StartButton>start!!</StartButton>
        {routineDetail.routine.map((routine) => {
          return <ListWrapper key={routine.title}>{routine.title}</ListWrapper>;
        })}
      </UlContainer>
      <FooterWrapper onClick={() => nav(PATH.home)}>이전으로</FooterWrapper>
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
  font-weight: bold;
  border-radius: 12px;
  padding: 10px;
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
