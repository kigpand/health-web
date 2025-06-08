import styled from "styled-components";

export const PageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  position: fixed;
  bottom: 0;
`;
