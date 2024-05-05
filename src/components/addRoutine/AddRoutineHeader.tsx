import styled from "styled-components";

export default function AddRoutineHeader() {
  return <HeaderWrapper>루틴 추가</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  width: 100%;
  font-size: 24px;
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: bold;
`;
