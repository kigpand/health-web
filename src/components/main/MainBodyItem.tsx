import { RoutineListType } from "@/types/Routine";
import styled from "styled-components";

type Props = {
  item: RoutineListType;
};

export default function MainBodyItem({ item }: Props) {
  return <ItemWrapper>{item.title}</ItemWrapper>;
}

const ItemWrapper = styled.li`
  width: 100%;
  padding: 16px 0;
  background-color: white;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
