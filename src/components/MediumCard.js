import axios from 'axios';
import { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';
import styled from 'styled-components';
import NewCarousel from './NewCarousel';

const CardBox = styled.div`
  background-color: white;
  width: 230px;
  border-radius: 10px;
  margin: 0 auto;
  height: 290px;
  cursor: pointer;
  &:hover {
    border: 0.5px solid rgba(6, 61, 215);
    box-shadow: 0px 0px 30px rgba(6, 61, 215, 0.8);
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 65%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`;
const Detail = styled.div`
  padding-left: 15px;
`;
const Title = styled.p`
  font-weight: 600;
  padding-top: 15px;
  color: black;
  font-size: 16px;
`;
const Author = styled.p`
  font-size: 13px;
  padding-top: 14px;
  color: black;
`;
const Date = styled.p`
  color: rgba(171, 171, 171, 1);
  padding-top: 12px;
  padding-bottom: 7px;
  font-size: 12px;
`;

function MediumCard() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const URL = '/feed/blockchain-valley';

  function parseStr(dataSet) {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    const totalData = [];

    for (let i = 9; i < dataArr[0].children.length; i++) {
      const authorIndex = dataArr[0].children[i].children.length - 4;
      const oneData = {};
      const title = dataArr[0].children[i].children[0].value;
      const author = dataArr[0].children[i].children[authorIndex].value;
      let date = dataArr[0].children[i].children[authorIndex + 1].value;
      const content = dataArr[0].children[i].children[authorIndex + 3].value;
      const url = dataArr[0].children[i].children[1].value;
      date.replace(',', '');
      date = date.split(' ');
      date.shift();
      date.length = 3;
      date = date.reverse();
      const published = date.join(' ');
      const newStartContent = content.indexOf('<img alt="" src="');
      const newContent = content.substr(newStartContent + 17);
      const imgIndex = newContent.indexOf('/>');
      const imgSrc = newContent.substr(0, imgIndex - 2);
      oneData.title = title.substr(0, title.length - 2);
      oneData.author = author.substr(0, author.length - 2);
      oneData.published = published;
      oneData.img = imgSrc;
      oneData.url = url;
      totalData.push(oneData);
    }
    console.log(totalData);
    return totalData;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setInfo(null);
        setLoading(true);
        const { data: dataSet } = await axios.get(`${PROXY + URL}`);
        console.log(dataSet);
        setInfo(parseStr(dataSet));
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>아직 로딩중이에여..기다려주세여</div>;
  if (error) return <div>오잉 에러가 발생해써요..🥺</div>;
  if (!info) return null;
  const cards = info.map((oneInfo, index) => (
    <CardBox key={index} onClick={() => window.open(oneInfo.url, '_blank')}>
      <CardImg src={oneInfo.img} alt="이미지 없음"></CardImg>
      <Detail>
        <Title>{oneInfo.title.length < 16 ? oneInfo.title : `${oneInfo.title.slice(0, 15)} ...`}</Title>
        <Author>{oneInfo.author}</Author>
        <Date>{oneInfo.published}</Date>
      </Detail>
    </CardBox>
  ));

  if (info) {
    return <NewCarousel>{cards}</NewCarousel>;
  }
}

export default MediumCard;
