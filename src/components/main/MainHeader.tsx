import styled from "styled-components";

export default function MainHeader() {
  return <HeaderWrapper>오늘의 운동은?</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  width: 100%;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
`;
