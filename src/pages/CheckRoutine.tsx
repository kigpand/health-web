import { PATH } from "@/enum/path";
import { useRoutineCount } from "@/hook/quires/routine";
import { HeaderWrapper, PageWrapper } from "@/styles/PageStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CheckRoutine() {
  const nav = useNavigate();
  const { routineCount } = useRoutineCount(7);

  return (
    <CheckRoutineWrapper>
      <HeaderWrapper>
        <span>최근 루틴 조회</span>
        <HomeButton onClick={() => nav(PATH.home)}>홈</HomeButton>
      </HeaderWrapper>
      <RoutineListStyled>
        <header>최근 ?일간 루틴</header>
        {routineCount?.map((item) => {
          return <ListStyled key={item._id}>{item.title}</ListStyled>;
        })}
      </RoutineListStyled>
    </CheckRoutineWrapper>
  );
}

const CheckRoutineWrapper = styled(PageWrapper)``;

const HomeButton = styled.div`
  position: absolute;
  right: 10px;
  font-size: 12px;
`;

const RoutineListStyled = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
`;

const ListStyled = styled.li`
  width: 100%;
  padding: 16px 0px;
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
