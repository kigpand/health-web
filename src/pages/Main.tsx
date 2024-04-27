import styled from "styled-components";
import MainHeader from "@components/main/MainHeader";
import MainBody from "@components/main/MainBody";

const Main = () => {
  return (
    <MainWrapper>
      <MainHeader />
      <MainBody />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;
