import styled from "styled-components";

export default function RoutinePlayListLinkNone() {
  return <NoneLink>제공된 영상 링크가 없습니다.</NoneLink>;
}

const NoneLink = styled.div`
  margin: 15px 0px 10px 0px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: red;
  cursor: pointer;
  text-decoration: underline;
`;
