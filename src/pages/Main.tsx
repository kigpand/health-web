import MainHeader from "@components/main/MainHeader";
import styled from "styled-components";

const Main = () => {
  return (
    <MainWrapper>
      <MainHeader />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;
