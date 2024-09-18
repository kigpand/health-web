import { RoutineDataType } from "@/types/Routine";
import styled from "styled-components";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdAutoFixHigh } from "react-icons/md";

type Props = {
  routine: RoutineDataType[];
  handleAddRoutine: () => void;
  handleUpdateRoutine: (routineData: RoutineDataType) => void;
  deleteRoutineItem: (item: RoutineDataType) => void;
};

export default function RoutineEditModalList({
  routine,
  handleAddRoutine,
  handleUpdateRoutine,
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
              <RiDeleteBin5Fill onClick={() => deleteRoutineItem(item)} />
              <MdAutoFixHigh onClick={() => handleUpdateRoutine(item)} />
            </ButtonWrapper>
          </ListStyled>
        );
      })}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  margin-top: 20px;
  padding: 5px 0px;
  border-top: 1px solid lightgray;
  display: flex;
  flex-direction: column;
`;

const Title = styled.header`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0px 20px 0;
  display: flex;
  justify-content: space-between;
`;

const ListStyled = styled.li`
  font-size: 15px;
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
