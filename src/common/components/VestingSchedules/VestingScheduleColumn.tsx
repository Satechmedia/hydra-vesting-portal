import styled from "styled-components";
import { getVerticalGap } from "../../styles";
import { Label } from "../Label/Label";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  ${getVerticalGap("10px")};
`;

const ColumnLabel = styled(Label)`
  opacity: 0.5;
  font-size: 20px;
`;

const ColumnValue = styled(Label)`
  font-size: 20px;
`;

type Props = {
  label: string;
  value: string | number;
};

const VestingScheduleColumn = ({ label, value }: Props) => {
  return (
    <Root>
      <ColumnLabel>{label}</ColumnLabel>
      <ColumnValue>{value}</ColumnValue>
    </Root>
  );
};

export default VestingScheduleColumn;
