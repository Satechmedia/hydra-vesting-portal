import styled from "styled-components";
import LoadingSpinner from "../common/components/LoadingSpinner";

export const Container = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Fallback = () => {
  return (
    <Container>
      <LoadingSpinner />
    </Container>
  );
};

export default Fallback;
