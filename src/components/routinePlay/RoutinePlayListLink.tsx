import styled from "styled-components";
import RoutinePlayListLinkNone from "./RoutinePlayListLinkNone";
import { RoutineDataType } from "@/types/Routine";

type Props = {
  currentRoutine: RoutineDataType;
};

export default function RoutinePlayListLink({ currentRoutine }: Props) {
  return currentRoutine.link ? (
    <LinkStyled>
      <Label>참조 영상</Label>
      <Link href={currentRoutine.link} target="_blank">
        {currentRoutine.link}
      </Link>
    </LinkStyled>
  ) : (
    <RoutinePlayListLinkNone />
  );
}

const LinkStyled = styled.div`
  margin: 20px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Label = styled.header`
  font-weight: bold;
`;

const Link = styled.a`
  font-weight: bold;
  color: blue;
  text-decoration: underline;
`;
