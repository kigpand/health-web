import { RoutineDataType } from "@/types/Routine";
import styled from "styled-components";

type Props = {
  routine: RoutineDataType[];
  handleAddRoutine: () => void;
  deleteRoutineItem: (item: RoutineDataType) => void;
};

export default function RoutineEditModalList({
  routine,
  handleAddRoutine,
  deleteRoutineItem,
}: Props) {
  return (
    <ListWrapper>
      <Title>
        <span>루틴 리스트</span>
        <div onClick={handleAddRoutine}>+</div>
      </Title>
      {routine.map((item, i) => {
        return (
          <ListStyled key={i}>
            <span>{item.title}</span>
            <ButtonWrapper>
              <div onClick={() => deleteRoutineItem(item)}>x</div>
              <div>o</div>
            </ButtonWrapper>
          </ListStyled>
        );
      })}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  padding: 10px 0px;
  border-top: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.header`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

const ListStyled = styled.li`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
