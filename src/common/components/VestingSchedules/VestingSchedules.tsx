import styled from "styled-components";
import { IVestingSchedule } from "../../interfaces";
import { getVerticalGap } from "../../styles";
import NoVestingSchedules from "./NoVestingSchedules";
import VestingSchedule from "./VestingSchedule";

const Root = styled.div`
  width: 100%;
  padding: 0 20px 0 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${getVerticalGap("10px")};
`;

type Props = {
  vestingSchedules: IVestingSchedule[];
  isWrongNetwork: boolean;
  onClaim: (vestingScheduleId: string, amount: string) => void;
};

const VestingSchedules = ({
  vestingSchedules,
  isWrongNetwork,
  onClaim,
}: Props) => {
  return (
    <Root>
      <Container>
        {vestingSchedules.length > 0 ? (
          vestingSchedules.map(
            (vestingSchedule: IVestingSchedule, index: number) => (
              <VestingSchedule
                key={index}
                isWrongNetwork={isWrongNetwork}
                vestingSchedule={vestingSchedule}
                onClaim={onClaim}
              />
            )
          )
        ) : (
          <NoVestingSchedules />
        )}
      </Container>
    </Root>
  );
};

export default VestingSchedules;
