import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect, useState } from 'react';

import axios from 'axios';

const Slidercontainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  background-color: #fff;
`;
const Slidercontrol = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  margin: auto;
  position: absolute;
  border-radius: 50%;
  z-index: 2;
`;

const Slide = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Image = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;
const Infocontainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  height: 100%;
  width: 100%;
  padding-bottom: 7rem;
  color: #fff;
`;
const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1.3rem;
  padding-bottom: 1rem;
`;
const Desc = styled.p`
  font-size: 1.1rem;
  padding-bottom: 1.5rem;
`;
const Btn = styled.button`
  border: none;
  padding: 1.3rem;
  width: 12rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 1rem;
  background-color: #ffd60a;
  transition: 0.2s ease all;
  text-transform: uppercase;

  &:hover {
    background-color: #ffd60ab1;
    transform: scale(1.1);
  }
`;
const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/getslidercontent').then((Response) => {
      setSliders(Response.data);
    });
  }, []);

  const handleClick = (direction) => {
    if (direction === 'left') {
      if (sliderIndex !== sliders.length - 1) {
        setSliderIndex(sliderIndex + 1);
      } else if (sliderIndex === sliders.length - 1) {
        setSliderIndex(0);
      }
    } else if (direction === 'right') {
      if (sliderIndex !== 0) {
        setSliderIndex(sliderIndex - 1);
      } else if (sliderIndex === 0) {
        setSliderIndex(sliders.length - 1);
      }
    }
  };

  return (
    <Slidercontainer>
      <Slidercontrol direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftIcon />
      </Slidercontrol>
      <Wrapper sliderIndex={sliderIndex}>
        {sliders.map((data) => {
          return (
            <Slide key={data._id}>
              <Image src={data.image} />
              <Infocontainer>
                <Title>{data.title}</Title>
                <Desc>{data.desc}</Desc>
                <Btn>Shop Now</Btn>
              </Infocontainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Slidercontrol direction="right" onClick={() => handleClick('right')}>
        <ArrowRightIcon />
      </Slidercontrol>
    </Slidercontainer>
  );
};

export default Slider;
