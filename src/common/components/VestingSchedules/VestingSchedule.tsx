import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IVestingSchedule } from "../../interfaces";
import { getHorizontalGap } from "../../styles";
import { Button } from "../Buttons/Button";
import VestingScheduleColumn from "./VestingScheduleColumn";

const Root = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${getHorizontalGap("10px")}
  background-color: rgba(25, 32, 56, 0.6);
  border-width: 0px;
  border-color: transparent;
  border-style: solid;
  padding: 25px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;

  @media (max-width: ${({ theme }) => theme.maxWidth.md}) {
    flex-direction: column;
  }
`;

const ClaimButton = styled(Button)`
  display: flex;
  justify-content: center;
`;

type Props = {
  vestingSchedule: IVestingSchedule;
  isWrongNetwork: boolean;
  onClaim: (vestingScheduleId: string, amount: string) => void;
};
const VestingSchedule = ({
  vestingSchedule,
  isWrongNetwork,
  onClaim,
}: Props) => {
  const { t } = useTranslation();
  const {
    amountReleasable,
    start,
    amountTotal,
    amountClaimed,
    end,
    vestingScheduleId,
    revoked,
  } = vestingSchedule;

  return (
    <Root>
      <Container>
        <VestingScheduleColumn
          label={t("vesting-schedule.claimable-tokens")}
          value={amountReleasable}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.vesting-start")}
          value={start.toLocaleString("en-US")}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.vesting-end")}
          value={end.toLocaleString("en-US")}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.total-tokens")}
          value={amountTotal}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.claimed-tokens")}
          value={amountClaimed}
        />
        <ClaimButton
          isDisabled={amountReleasable === "0.00" || revoked || isWrongNetwork}
          onClick={() => onClaim(vestingScheduleId, amountReleasable)}
        >
          {t("vesting-schedule.claim")}
        </ClaimButton>
      </Container>
    </Root>
  );
};

export default VestingSchedule;
