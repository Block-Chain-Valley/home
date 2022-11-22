import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MediumCard from './MediumCard';
import FirstImg from '../assets/page-first.svg';
import FirstIcon from '../assets/Bitcoin-1.svg';
import SecondIcon from '../assets/Etherium-2 copy 1.svg';
import Footer from './Footer';
import Partners from '../assets/Frame 124.svg';
import './btn.css';

const Fullimg = styled.img`
  width: 100%;
  opacity: 0.6;
  height: 100vh;
  object-fit: cover;
  /* height: ${props => `${props.height}px`}; */
  animation: fadein 4s;
  -moz-animation: fadein 4s; /* Firefox */
  -webkit-animation: fadein 4s; /* Safari and Chrome */
  -o-animation: fadein 4s; /* Opera */
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 0.6;
    }
  }
  @keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 0.6;
    }
  }
`;

const LastContent = styled.div`
  height: 100vh;
`;

const ExceptFooter = styled.div`
  height: ${props => `${props.height}px`};
  padding-top: 60px;
`;

const JoinTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

const JoinText = styled.div`
  text-align: center;
  margin-top: 2vh;
`;

const JoinDetail = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 10px;
`;

const SponsorBox = styled.img`
  width: 60%;
  margin: 7vh auto;
`;

const BoldDetail = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Sponsor = styled.div`
  margin: 2vh 11.7vw;
  display: flex;
  flex-direction: column;
  height: 30vh;
`;

const SecondTotal = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh 11.7vw;
  justify-content: center;
  height: 100vh;
`;

const SecondBox = styled.div`
  display: flex;
  margin: 5vh auto;
  width: 76.6vw;
  /* background-color: green; */
  align-items: center;
`;

const MediumTitle = styled.p`
  margin-left: 11.9vw;
  font-size: 2rem;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 15vw;
`;

const Title = styled.p`
  font-size: 2.3rem;
  font-weight: 800;
  margin-bottom: 3vh;
`;
const Detail = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 35px;
`;
const Text = styled.div`
  padding-left: 5vw;
  border-left: 2px solid white;
  margin-left: 3vw;
`;

const Middle = styled.p`
  font-size: 45px;
  font-weight: 600;
  text-shadow: 0px 0px 50px rgba(6, 61, 285, 0.8);
  margin-bottom: 3vh;
  @media all and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PBox = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImgBox = styled.div`
  position: relative;
`;

const GoToJoin = styled.div`
  /* background-color: green; */
  margin-left: 11.7vw;
  margin-right: 11.7vw;
  height: 35vh;
`;

const Text2 = styled.div`
  padding-right: 5vw;
  border-right: 2px solid white;
  margin-right: 1vw;
  padding-left: 4vw;
`;

const Third = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-top: 5vh;
`;

const SlideBox = styled.div`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  overflow: hidden;
`;
// const Lineimg = styled.div`
//   height: 10%;
// `;

function MyFullPage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <SlideBox height={windowSize.height} width={windowSize.width}>
        <ImgBox>
          <Fullimg src={FirstImg} alt="first img"></Fullimg>
        </ImgBox>
        <PBox>
          <Middle>다가올 WEB 3.0의 미래를 함께</Middle>
          <Middle>만들어나갈 혁신가들의 공간</Middle>
        </PBox>
      </SlideBox>
      <SecondTotal>
        <SecondBox>
          <div>
            <Icon src={FirstIcon} alt="icon 1"></Icon>
          </div>
          <Text>
            <Title>Our Vision</Title>
            <Detail>WEB3의 진정한 가치를 학습하는 공간, 자신의 미래를 위해 준비를 하는 공간. </Detail>
          </Text>
        </SecondBox>
        <SecondBox>
          <Text2>
            <Title>Our activities</Title>
            <Detail>
              현재 18명의 리서처팀과 19명의 개발팀으로 구성되어 있으며, 총 37명이 노드로 활동하며 활발한 리서치 활동과
              프로덕트 개발을 하고 있습니다.
            </Detail>
          </Text2>
          <div>
            <Icon src={SecondIcon} alt="icon 2"></Icon>
          </div>
        </SecondBox>
      </SecondTotal>
      <Third>
        <div>
          <MediumTitle>Recent Medium</MediumTitle>
        </div>
        <MediumCard />
      </Third>
      <LastContent>
        <ExceptFooter height={windowSize.height - 189.2}>
          <GoToJoin>
            <JoinTitle>Join us</JoinTitle>
            <JoinText>
              <BoldDetail>우리는 혼자 할 수 없고, 함께해야만 할 수 있다는 것을 확신합니다.</BoldDetail>
              <JoinDetail>WEB 3.0이라는 거대한 물결에 함께 올라탈</JoinDetail>
              <JoinDetail>예비 노드 여러분의 지원을 기다립니다.</JoinDetail>
              <button className="w-btn-neon2" type="button">
                <NavLink to="/join">Join us</NavLink>
              </button>
            </JoinText>
          </GoToJoin>
          <Sponsor>
            <JoinTitle>Our Partners</JoinTitle>
            <SponsorBox src={Partners}></SponsorBox>
          </Sponsor>
        </ExceptFooter>
        <Footer />
      </LastContent>
    </>
  );
}

export default MyFullPage;
