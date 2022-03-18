import styled from "styled-components";
import { getHorizontalGap } from "../../styles";
import { Label } from "../Label/Label";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import hydraLogo from "../../../assets/png/hydra-logo.png";
import { useTranslation } from "react-i18next";

const CustomFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4.3rem;
  padding: 0 20px 0 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  ${getHorizontalGap("10px")};
`;

const Title = styled(Label)`
  font-size: 24px;
  @media (max-width: ${({ theme }) => theme.maxWidth.md}) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 24px;
  width: 24px;
`;

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <CustomFlexWrapper>
      <TitleContainer>
        <Logo src={hydraLogo} alt="hydra logo" />
        <Title>{t("hydra-vesting-title")}</Title>
      </TitleContainer>
      <div>
        <ConnectWallet />
      </div>
    </CustomFlexWrapper>
  );
};

export default Navbar;
