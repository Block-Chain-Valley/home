import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TimelineObserver from 'react-timeline-animation';
import animationData from '../animations/98428-arrow-down-purple.json';
import Footer from '../components/Footer';

import Main from '../components/Main';
import JoinDeatil from '../components/JoinDetail';

const PageBox = styled.div`
  width: 100%;
  height: ${props => `${props.height}px`};
  /* background-color: ${props => props.bgcolor}; */
  display: flex;
  text-align: center;
  align-items: center;
  padding-bottom: ${props => `${props.paddingBottom}px`};
  overflow: auto;
  flex-direction: column;
  justify-content: center;
  margin-top: 22vh;
`;

const Title = styled.p`
  font-size: 39px;
  font-weight: 600;
  text-align: center;
  text-shadow: 0px 0px 50px rgba(6, 61, 285, 0.8);
  line-height: 50px;
  margin: 10px 20vw;
  @media all and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NotNowTop = styled.p`
  font-size: 25px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
`;
const NotNow = styled.p`
  font-size: 23px;
  text-align: center;
  font-weight: 300;
`;
const TimeLineDiv = styled.div`
  margin-bottom: 15vh;
`;

function JoinPage() {
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
  const onCallback = () => {
    // console.log('awesome');
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

  console.log('this is scrolly' + scrollY);
  console.log('this is windowHeight' + windowSize.height);

  return (
    <Main>
      <PageBox height={windowSize.height - 100} paddingBottom={0}>
        <Title>다가오는 WEB 3의 미래를 블록체인 밸리에서</Title>
        <Title>함께 만들어갈 신입 node를 모집합니다!</Title>
        <Lottie animationData={animationData} style={{ width: '150px', marginTop: '130px' }} />
      </PageBox>
      <TimeLineDiv>
        <TimelineObserver
          initialColor="#e5e5e5"
          fillColor="#4350AF"
          handleObserve={setObserver => <JoinDeatil callback={onCallback} setObserver={setObserver} />}
        />
      </TimeLineDiv>
      <PageBox height={windowSize.height - 100} paddingBottom={100}>
        <NotNowTop>지금은 지원 기간이 아닙니다</NotNowTop>
        <NotNow>지원 기간에 업로드될 공지를 확인해주세요</NotNow>
      </PageBox>
      <Footer />
    </Main>
  );
}

export default JoinPage;
