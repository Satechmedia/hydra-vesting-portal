import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import Web3Wrapper from "./Web3Wrapper";
import { GlobalStyle } from "../shell/theme/globalStyle";

interface ILayoutProps {
  theme: any;
  children: ReactNode;
}
const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ theme, children }: ILayoutProps) => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <Web3Wrapper>
        <Root>{children}</Root>
      </Web3Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
