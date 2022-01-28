import styled from 'styled-components';
import slide1 from '../img/greensofa.png';

const Container = styled.div`
  background-color: red;
`;
const Slidercontainer = styled.div`
  width: 100vw;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Infocontainer = styled.div`
  position: absolute;
`;
const Title = styled.div``;
const Desc = styled.div``;
const Btn = styled.button``;
const Slider = () => {
  return (
    <Container>
      <Slidercontainer>
        <Image src={slide1} />
        <Infocontainer>
          <Title>Elegant Sofas</Title>
          <Desc>
            We Design Pieces Of Funiture And objects The Perfectly Bridge The
            Gap Between Functionality And Beauty
          </Desc>
          <Btn>Shop Now</Btn>
        </Infocontainer>
      </Slidercontainer>
    </Container>
  );
};

export default Slider;
