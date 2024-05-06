import { RoutineDataType } from "@/types/Routine";
import styled from "styled-components";

export default function AddRoutineBodyListItem({
  title,
  kg,
  set,
}: RoutineDataType) {
  return (
    <BodyListItemWrapper>
      <span>{title}</span>
      <span>{kg}kg</span>
      <span>{set}세트</span>
    </BodyListItemWrapper>
  );
}

const BodyListItemWrapper = styled.li`
  display: flex;
  gap: 20px;
`;
