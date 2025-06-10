import { PATH } from "@/enum/path";
import { RoutineListType } from "@/types/Routine";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  item: RoutineListType;
};

export default function RoutineMainBodyItem({ item }: Props) {
  const nav = useNavigate();

  function handleMoveToDetail() {
    nav(`${PATH.routineDetail}?id=${item.id}`);
  }

  return <ItemWrapper onClick={handleMoveToDetail}>{item.title}</ItemWrapper>;
}

const ItemWrapper = styled.li`
  width: 100%;
  padding: 16px 0;
  background-color: white;
  border-radius: 16px;
  color: black;
  font-weight: bold;
  text-align: center;
`;
