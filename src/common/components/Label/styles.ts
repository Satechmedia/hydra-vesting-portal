import styled from "styled-components";
import { theme } from "../../../shell/theme/theme";
import { devicesUp } from "../../../media";

export type StyledLabel = {
  color?: boolean;
  margin?: number;
  fontWeight?: number;
};

export const StyledInputLabel = styled.label<StyledLabel>`
  font-size: ${theme.paragraph.sm};
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : theme.fontWeight.semibold};
  margin: ${(props) => (props.margin ? props.margin : `0 0 0.9rem 0`)};

  @media only screen and ${devicesUp.lg} {
    font-size: ${theme.paragraph.md};
  }
`;
