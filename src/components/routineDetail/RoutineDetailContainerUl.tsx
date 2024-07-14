import { RoutineListType } from "@/types/Routine";
import styled from "styled-components";

type Props = {
  routineDetail: RoutineListType | undefined;
};

export default function RoutineDetailContainerUl({ routineDetail }: Props) {
  return (
    <RoutineDetailWrapper>
      <label>루틴 리스트</label>
      <ListWrapper>
        {routineDetail?.routine.map((routine) => {
          return <ListStyled key={routine.title}>{routine.title}</ListStyled>;
        })}
      </ListWrapper>
    </RoutineDetailWrapper>
  );
}

const RoutineDetailWrapper = styled.article`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 50px 0 20px 0;
  }
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
`;

const ListStyled = styled.li`
  width: 90%;
  background-color: white;
  padding: 18px 5px;
  text-align: center;
  border-radius: 8px;
`;
