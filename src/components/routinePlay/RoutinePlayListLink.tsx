import styled from "styled-components";
import RoutinePlayListLinkNone from "./RoutinePlayListLinkNone";

type Props = {
  link: string | null;
};

export default function RoutinePlayListLink({ link }: Props) {
  return link ? (
    <LinkStyled>
      <Label>참조 영상: </Label>
      <Link>http://naver.com</Link>
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
