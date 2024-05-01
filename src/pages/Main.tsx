import styled from "styled-components";
import MainHeader from "@components/main/MainHeader";
import MainBody from "@components/main/MainBody";
import MainFooter from "@components/main/MainFooter";

const Main = () => {
  return (
    <MainWrapper>
      <MainHeader />
      <MainBody />
      <MainFooter />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;
