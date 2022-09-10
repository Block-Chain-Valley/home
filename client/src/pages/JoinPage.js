import styled from 'styled-components';
import Main from '../components/Main';

const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  padding: 120px 100px 30px 100px;
`;
const Middle = styled.p`
  font-size: 23px;
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
  padding-top: 30px;
  line-height: 50px;
  font-weight: 300;
`;
const NotNowTop = styled.p`
  font-size: 25px;
  text-align: center;
  font-weight: 600;
  margin-top: 150px;
  padding: 30px;
`;
const NotNow = styled.p`
  font-size: 23px;
  text-align: center;
  font-weight: 300;
`;

const JoinPage = () => (
  <Main>
    <Title>"다가오는 WEB 3의 미래를 블록체인 밸리에서 함께 만들어갈 신입 node를 모집합니다!"</Title>
    <Middle>- 블록체인에 대한 관심이 있고, NFT, Defi, DAO 등 블록체인이 가져올 미래에 대하여 호기심이 있는 사람</Middle>
    <Middle>- 1년 동안 블록체인밸리 활동에 집중할 수 있는 사람</Middle>
    <Middle>- 매주 화, 목요일에 안암에서 19:30분부터 3시간 동안 진행되는 정규 세션에 참여 가능한 사람</Middle>
    <Middle>
      - develop team의 경우, 하나 이상의 프로그래밍 언어(예: C, C++, Java, Python, Javascript 등) 학습 경험이 있는 분의
      지원을 권장합니다.
    </Middle>
    <NotNowTop>지금은 지원 기간이 아닙니다</NotNowTop>
    <NotNow>지원 기간에 업로드될 공지를 확인해주세요</NotNow>
  </Main>
);

export default JoinPage;
