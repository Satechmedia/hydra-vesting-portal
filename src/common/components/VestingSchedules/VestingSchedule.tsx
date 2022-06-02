import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IVestingSchedule } from "../../interfaces";
import { getHorizontalGap } from "../../styles";
import { Button } from "../Buttons/Button";
import VestingScheduleColumn from "./VestingScheduleColumn";
import twitter from "./../../../assets/png/twitter.png";
import telegram from "./../../../assets/png/telegram.png";
import logo from "./../../../assets/png/hydra-logo.png";

const Root = styled.div``;

const FooterWrappers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-left: 100px;
`;

const FooterIconsWrappers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 0px;
  height: 24px;
  width: 24px;
`;

const FooterIcon = styled.img`
  height: 24px;
  width: 24px;

  
`;

const FooterCopy = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: end;
  font-size: 8px;
  color: white;
  margin-right: 160px;
  margin-top: 0px;
  

`;

const TitlesHead = styled.div`
  color: white;
  font-size: 20px;
  margin-left: 100px;
  margin-bottom: 0px;
  padding: 0px;
  border: 0px;
  background-color: none;
  border-width: none;
  border-style: none;

`;

const TitlesRound = styled.div`
  color: white;
  font-size: 20px;
  margin-left: 100px;
  margin-bottom: 0px;
  margin-top: 30px;
  padding: 0px;
  border: 0px;
  background-color: none;
  border-width: none;
  border-style: none;

`;

const YellowLine = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
 padding-bottom: 10px;
 margin-left: 300px;
 margin-right: 300px;
 border: 1px solid #CB9A01;

`; 

const SmallHead = styled.div`
  color: yellow;
  background-color: none;
  border-width: none;
  border-style: none;
  padding: 0px;
  border-radius: 0px;
  margin-left: 110px;
  margin-top: 0px;
`;

const SmallDetails = styled.div`
  color: gold;
  background-color: none;
  border-width: none;
  border-style: none;
  padding: 0px;
  border-radius: 0px;
  margin-left: 110px;
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  ${getHorizontalGap("1px")}
  background-color: rgba(0, 0, 0, 0.6);
  border-width: 0px;
  border-color: transparent;
  border-style: solid;
  padding: 2px;
  margin-left: 5px;
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;

  @media (max-width: ${({ theme }) => theme.maxWidth.md}) {
    flex-direction: column;
  }
`;


const ClaimButton = styled(Button)`
  display: flex;
  height:86px;
  justify-content: center;
  flex-direction: column;
  border: 1px solid gold;
  border-radius: 10px;
  padding-right: 50px
  font-size: 30px;
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
      {/* <TitlesHead>
        <div>
        <h1>Vesting Portal</h1>
        </div>
      </TitlesHead> */}
      {/* <SmallHead>
      <h2>Your CKT vesting</h2>
      </SmallHead> */}
      
      {/* <Container>
        <VestingScheduleColumn
          label={t("vesting-schedule.total-tokens")}
          value={amountTotal}
        />
      
        <VestingScheduleColumn
          label={t("vesting-schedule.claimed-tokens")}
          value={amountClaimed}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.claimable-tokens")}
          value={amountReleasable}
        />
        {<ClaimButton
          isDisabled={amountReleasable === "0.00" || revoked || isWrongNetwork}
          onClick={() => onClaim(vestingScheduleId, amountReleasable)}
        >
          {t("vesting-schedule.claim")}
        </ClaimButton>}
      </Container> */}

      <YellowLine></YellowLine>

      <TitlesRound>
        <div>
        <h2>Vesting Round Details </h2>
        </div>
      </TitlesRound>
      <SmallDetails>
      <h2>Private Round</h2>
      </SmallDetails>

      <Container>
        <VestingScheduleColumn
          label={t("vesting-schedule.total-tokens")}
          value={amountTotal}
        />
        {/* <VestingScheduleColumn
          label={t("vesting-schedule.vesting-start")}
          value={start.toLocaleString("en-US")}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.vesting-end")}
          value={end.toLocaleString("en-US")}
        /> */}
        <VestingScheduleColumn
          label={t("vesting-schedule.claimed-tokens")}
          value={amountClaimed}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.claimable-tokens")}
          value={amountReleasable}
        />
        {<ClaimButton
          isDisabled={amountReleasable === "0.00" || revoked || isWrongNetwork}
          onClick={() => onClaim(vestingScheduleId, amountReleasable)}
        >
          {t("vesting-schedule.claim")}
        </ClaimButton>}
      </Container>
      <YellowLine></YellowLine>
      <SmallDetails>
      <h2>Seed Round</h2>
      </SmallDetails>

      <Container>
        <VestingScheduleColumn
          label={t("vesting-schedule.total-tokens")}
          value={0.00}
        />
        {/* <VestingScheduleColumn
          label={t("vesting-schedule.vesting-start")}
          value={start.toLocaleString("en-US")}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.vesting-end")}
          value={end.toLocaleString("en-US")}
        /> */}
        <VestingScheduleColumn
          label={t("vesting-schedule.claimed-tokens")}
          value={0.00}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.claimable-tokens")}
          value={0.00}
        />
        {<ClaimButton
          isDisabled={amountReleasable === "0.00" || revoked || isWrongNetwork}
          onClick={() => onClaim(vestingScheduleId, amountReleasable)}
        >
          {t("vesting-schedule.claim")}
        </ClaimButton>}
      </Container>
      
      <FooterWrappers>
      <FooterIconsWrappers>
      <a href="https://caketools.io" target="_blank" rel="noreferrer"><FooterIcon src={logo} alt="logo" /> </a>
      <a href="https://Twitter.com/caKe_Tools" target="_blank" rel="noreferrer"><FooterIcon src={twitter} alt="twitter" /> </a>
      <a href="https://t.me/caketoolsio" target="_blank" rel="noreferrer"><FooterIcon src={telegram} alt="telegram" /> </a>
      </FooterIconsWrappers>
      
      <FooterCopy>
        <h1>Caketools 2022. All right reserved</h1>
      </FooterCopy>
      </FooterWrappers>
      
    </Root>
  );
};


  {/* <VestingScheduleColumn
          label={t("vesting-schedule.vesting-start")}
          value={start.toLocaleString("en-US")}
        />
        <VestingScheduleColumn
          label={t("vesting-schedule.vesting-end")}
          value={end.toLocaleString("en-US")}
        /> */}
export default VestingSchedule;
