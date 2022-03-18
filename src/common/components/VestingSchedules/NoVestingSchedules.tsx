import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Label } from "../Label/Label";

const NoSchedulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoSchedulesLabel = styled(Label)`
  font-size: 20px;
`;

const NoVestingSchedules = () => {
  const { t } = useTranslation();

  return (
    <NoSchedulesContainer>
      <NoSchedulesLabel>
        {t("vesting-schedule.no-vesting-schedules")}
      </NoSchedulesLabel>
    </NoSchedulesContainer>
  );
};
export default NoVestingSchedules;
