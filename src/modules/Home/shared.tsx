import styled from "styled-components";
import { devicesUp } from "../../media";
import { theme } from "../../shell/theme/theme";

export const Root = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: url("./hydra-background.svg") no-repeat fixed center center;
  background-size: cover;
  padding: ${theme.margin.lg} 0;

  @media only screen and ${devicesUp.md} {
    padding: 4rem 0 4rem 0;
  }
`;

export const Container = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
