import styled from "styled-components";
import { getVerticalGap } from "../../styles";
import { Label } from "../Label/Label";

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-right: 100px;
  flex-direction: column;
  border-radius: 10px;
  margin-right: 110px;
  margin-left: 110px;
  margin-bottom: 10px;
  ${getVerticalGap("5px")};
`;

const ColumnLabel = styled(Label)`
  opacity: 0.5;
  font-size: 20px;
  padding: 10px;
`;

const ColumnValue = styled(Label)`
  font-size: 20px;
  padding: 0px 10px;
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
