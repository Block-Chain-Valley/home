import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import '../App.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timeline = styled.div`
  height: 70vh;
  width: 3px;
  box-shadow: 0px 0px 24px 2px rgba(23, 74, 255, 0.36);
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  color: darkblue;
  border-radius: 50%;
  margin: 0vw 5vw;
`;

const CircleWrapper = styled.div`
  position: relative;
`;

const MessageR = styled.div`
  position: absolute;
  left: 100%;
  top: 0%;
  font-size: 1.6vw;
  font-weight: bold;
  width: 38vw;
  transition: all 0.2s ease-in-out;
`;

const MessageL = styled.div`
  position: absolute;
  right: 65%;
  top: 0%;
  font-size: 1.6vw;
  font-weight: bold;
  width: 38vw;
  transition: all 0.8s ease-in-out;
`;

const DetailMessage = styled.p`
  line-height: 40px;
  text-shadow: 0px 0px 50px rgba(6, 61, 285, 0.8);
  @media all and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const JoinDeatil = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');
  const [message4, setMessage4] = useState('');
  const [message5, setMessage5] = useState('');

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback1 = () => {
    setMessage1('블록체인의 진정한 가치 학습이라는 비전에 공감하는 사람');
    callback();
  };
  const someCallback2 = () => {
    setMessage2('1년 동안 함께 지속적으로 성장하고자 하는 사람');
  };
  const someCallback3 = () => {
    setMessage3('매주 2번 3시간 씩 이루어지는 세션에 성실히 참여할 수 있는 사람');
  };
  const someCallback4 = () => {
    setMessage4('실제로 가치가 있는 프로덕트를 만들고자 하는 개발팀');
  };
  const someCallback5 = () => {
    setMessage5('자신만의 관점을 통해 블록체인을 분석하는 리서치팀');
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current, someCallback1);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <Wrapper>
      <Timeline id="timeline1" ref={timeline1} />
      <CircleWrapper>
        <Circle id="circle1" ref={circle1}></Circle>
        <MessageR>
          <CSSTransition unmountOnExit timeout={400} classNames="moveR" in={message1}>
            <DetailMessage>{message1}</DetailMessage>
          </CSSTransition>
        </MessageR>
      </CircleWrapper>
      <Timeline id="timeline2" ref={timeline2} />
      <CircleWrapper>
        <Circle id="circle2" ref={circle2}></Circle>
        <MessageL>
          <CSSTransition unmountOnExit timeout={400} classNames="moveL" in={message2}>
            <DetailMessage>{message2}</DetailMessage>
          </CSSTransition>
        </MessageL>
      </CircleWrapper>
      <Timeline id="timeline3" ref={timeline3} />
      <CircleWrapper>
        <Circle id="circle3" ref={circle3}></Circle>
        <MessageR>
          <CSSTransition unmountOnExit timeout={400} classNames="moveR" in={message3}>
            <DetailMessage>{message3}</DetailMessage>
          </CSSTransition>
        </MessageR>
      </CircleWrapper>
      <Timeline id="timeline4" ref={timeline4} />
      <CircleWrapper>
        <Circle id="circle4" ref={circle4}></Circle>
        <MessageL>
          <CSSTransition unmountOnExit timeout={400} classNames="moveL" in={message4}>
            <DetailMessage>{message4}</DetailMessage>
          </CSSTransition>
        </MessageL>
      </CircleWrapper>
      <Timeline id="timeline5" ref={timeline5} />
      <CircleWrapper>
        <Circle id="circle5" ref={circle5}></Circle>
        <MessageR>
          <CSSTransition unmountOnExit timeout={400} classNames="moveR" in={message5}>
            <DetailMessage>{message5}</DetailMessage>
          </CSSTransition>
        </MessageR>
      </CircleWrapper>
    </Wrapper>
  );
};

export default JoinDeatil;
