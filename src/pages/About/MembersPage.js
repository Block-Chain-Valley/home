import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import githubLogo from '../../assets/github.svg';
import mediumLogo from '../../assets/medium.svg';
import instagramLogo from '../../assets/instagram.svg';
import loading from '../../assets/loadingAni2.svg';

import { tempData1, tempData2 } from '../../.tempdata';

const generationCnt = 2;
const generations = [];
for (let i = 1; i <= generationCnt; i++) {
  generations.push(i);
}

const MembersPage = () => {
  const [selectedGeneration, setSelectedGenereation] = useState('1');
  const [nodeData, setNodeData] = useState(-1);

  const generationClickHandler = event => {
    setSelectedGenereation(event.target.id);
  };

  const loadData = () => {
    fetchData(parseInt(selectedGeneration, 10));
  };

  // const fetchData = gen => (gen === 1 ? setNodeData(tempData1) : setNodeData(tempData2));

  const fetchData = gen =>
    axios
      .get(`https://bv-main-db-server.herokuapp.com/nodeInfo?generation=${gen}&image=y`)
      .then(res => {
        setNodeData(res.data);
      })
      .catch(err => console.log(err));
  // axios
  //   .get(`https://bv-main-db-server.herokuapp.com/nodeInfo?generation=${gen}&image=y`)
  //   .then(res => {
  //     setNodeData(res.data);
  //   })
  //   .catch(err => console.log(err));

  useEffect(() => {
    loadData();
    console.log(nodeData);
  }, [selectedGeneration]);

  return (
    <Container>
      <NavList>
        {generations.map(el => (
          <NavItem
            key={el}
            id={el}
            className={el === parseInt(selectedGeneration, 10) ? 'isActive' : ''}
            onClick={generationClickHandler}>
            {`${el}기`}
          </NavItem>
        ))}
      </NavList>

      {nodeData === -1 ? (
        <Loading>
          <LoadingAnimation src={loading} />
        </Loading>
      ) : (
        <MembersContainer>
          {nodeData.map((node, idx) => (
            <Card key={idx}>
              <Img src={node.IMAGE_LINK} alt={node.NAME} />
              <NameContainer>
                <NameTxt>{node.NAME}</NameTxt>
                <InfoTxt>
                  {node.GENERATION}기 | {node.ROLE === 'dev' ? '개발팀' : '리서치팀'}
                </InfoTxt>
              </NameContainer>
              {node.EMAIL === '' ? null : <ContactlTxt>{node.EMAIL}</ContactlTxt>}
              <LogoContainer>
                {node.INSTAGRAM === '' ? null : (
                  <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href={node.INSTAGRAM}>
                    <Logo src={instagramLogo} />
                  </FollowUsLogoLink>
                )}
                {node.GITHUB === '' ? null : (
                  <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href={node.GITHUB}>
                    <Logo src={githubLogo} />
                  </FollowUsLogoLink>
                )}
                {node.MIDIUM === '' ? null : (
                  <FollowUsLogoLink rel="noopener noreferrer" target="_blank" href={node.MIDIUM}>
                    <Logo src={mediumLogo} />
                  </FollowUsLogoLink>
                )}
              </LogoContainer>
            </Card>
          ))}
        </MembersContainer>
      )}
    </Container>
  );
};

const FollowUsLogoLink = styled.a`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin: 0px 27px 20px 0px;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.4);
    border-radius: 16px;
  }
`;
const LoadingAnimation = styled.img`
  opacity: 60%;
  width: 15vw;
`;

const LogoContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const Logo = styled.img`
  height: 32px;
`;

const Container = styled.div`
  /* margin: 0 11.7vw; */
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin: 0 -2rem;
`;

const Card = styled.div`
  padding: 25px;
  width: 300px;
  height: 478px;
  margin: 2rem;
  background-color: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 0px 35px 11px rgba(255, 255, 255, 0.2);
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const NameContainer = styled.div`
  width: 251px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const NameTxt = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
`;

const InfoTxt = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const ContactlTxt = styled.div`
  width: 163px;
  height: 18px;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-bottom: 13px;
`;

const Img = styled.img`
  width: 251px;
  height: 247px;
  border-radius: 33px;
  object-fit: cover;
  margin-bottom: 25px;
`;

const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  justify-content: center;
`;

const NavList = styled.ul`
  margin-top: 2rem;
  height: 6rem;
  /* width: 50vw; */
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const NavItem = styled.li`
  font-size: 2.2rem;
  font-weight: 500;
  cursor: pointer;
  height: 3rem;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 0px 0px 50px rgba(6, 61, 215, 0.8);

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  &.isActive {
    text-shadow: 0px 8px 43px rgba(19, 72, 224, 0.75);
    color: #ffffff;
  }

  & + & {
    margin-left: 2rem;
  }
`;

export default MembersPage;
