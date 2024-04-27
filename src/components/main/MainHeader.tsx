import styled from "styled-components";

export default function MainHeader() {
  return <HeaderWrapper>오늘의 운동은?</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  background-color: white;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 24px 0px;
`;
