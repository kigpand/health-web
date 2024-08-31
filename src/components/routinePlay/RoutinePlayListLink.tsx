import styled from "styled-components";
import RoutinePlayListLinkNone from "./RoutinePlayListLinkNone";
import { RoutineDataType } from "@/types/Routine";

type Props = {
  currentRoutine: RoutineDataType;
};

export default function RoutinePlayListLink({ currentRoutine }: Props) {
  return currentRoutine.link ? (
    "링크"
  ) : null ? (
    <LinkStyled>
      <Label>참조 영상: </Label>
      <Link>{currentRoutine.link}</Link>
    </LinkStyled>
  ) : (
    <RoutinePlayListLinkNone />
  );
}

const LinkStyled = styled.div`
  margin: 10px 0px;
  display: flex;
  gap: 10px;
`;

const Label = styled.header`
  font-weight: bold;
`;

const Link = styled.a``;
