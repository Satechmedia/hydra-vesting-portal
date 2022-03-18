import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Label } from "../../common/components/Label/Label";
import { Container } from "./shared";

const InfoMessage = styled(Label)`
  font-size: 24px;
`;

const HomeInfoMessage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <InfoMessage>{t("connect-wallet-continue-message")} </InfoMessage>
    </Container>
  );
};

export default HomeInfoMessage;
