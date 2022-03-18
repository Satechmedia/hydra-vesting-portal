import { useWeb3 } from "@chainsafe/web3-context";
import useHome from "./useHome";
import VestingSchedules from "../../common/components/VestingSchedules/VestingSchedules";
import HomeLoader from "../HomeLoader";
import HomeInfoMessage from "./HomeInfoMessage";
import { Root } from "./shared";
import Navbar from "../../common/components/Navbar/Navbar";

const Home = () => {
  const { address } = useWeb3();
  const { vestingSchedules, isLoading, isWrongNetwork, onClaim } = useHome();

  if (isLoading) {
    return (
      <Root>
        <Navbar />
        <HomeLoader />
      </Root>
    );
  }

  if (!address) {
    return (
      <Root>
        <Navbar />
        <HomeInfoMessage />
      </Root>
    );
  }

  return (
    <Root>
      <Navbar />
      <VestingSchedules
        isWrongNetwork={isWrongNetwork}
        vestingSchedules={vestingSchedules}
        onClaim={onClaim}
      />
    </Root>
  );
};

export default Home;
