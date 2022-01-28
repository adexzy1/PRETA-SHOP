import styled from 'styled-components';

const Container = styled.div`
  background: #233d3f;
`;
const Text = styled.p`
  color: #fff;
  padding: 1rem;
  text-align: center;
  letter-spacing: 0.2rem;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>
      <Text>Free Shipping on all orders above $1000</Text>
    </Container>
  );
};

export default Announcement;
