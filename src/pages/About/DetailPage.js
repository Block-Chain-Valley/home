import styled from 'styled-components';
import Slider from 'react-slick';

import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import lounge1 from '../../assets/images/lounge1.jpeg';
import lounge2 from '../../assets/images/lounge2.jpeg';
import lounge3 from '../../assets/images/lounge3.jpeg';
import lounge4 from '../../assets/images/lounge4.jpeg';
import lounge5 from '../../assets/images/lounge5.jpeg';

const MainTitle = styled.h2`
  margin-top: 100px;
  font-weight: 500;
  font-size: 36px;
  text-align: center;
  color: #ffffff;
`;

const Subtitle = styled.h3`
  font-weight: 700;
  font-size: 32px;
  margin-top: 200px;
  margin-left: 80px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const DetailItem = styled.p`
  font-weight: 300;
  font-size: 25px;
  line-height: 39px;
  text-align: center;

  & + & {
    margin-top: 32px;
  }
`;

const SliderContainer = styled.div`
  padding-top: 30px;
  padding-left: 80px;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  padding-right: 40px;
`;

const LoungeImg = styled.img`
  width: 355px;
  height: 233px;
  border-radius: 5px;
`;

const StyledSlider = styled(Slider)`
  /* Slider */
  height: 350px;
  position: relative;

  .slick-loading .slick-list {
    /* background: #fff url('./ajax-loader.gif') center center no-repeat; */
  }

  .slick-slide {
    float: left;
    min-height: 1px;
  }

  .slick-track {
    display: flex;
  }

  /* Arrows */
  .slick-prev,
  .slick-next {
    position: absolute;
    display: block;
    width: 50px;
    height: 50px;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    top: 83%;
  }

  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-prev {
    left: 45%;
  }

  .slick-next {
    left: 50%;
  }
`;

const Arrow = props => {
  const { className, style, onClick, isRight } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        border: '2px solid #fff',
        borderRadius: '50%',
        padding: isRight ? '2px 0 0 3px' : '4px',
        paddingLeft: '3px',
        paddingTop: '2px',
      }}
      onClick={onClick}>
      <img src={isRight ? arrowRight : arrowLeft} alt={isRight ? '다음' : '이전'} style={{ width: '15px' }} />
    </div>
  );
};

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: <Arrow isRight={true} />,
  prevArrow: <Arrow isRight={false} />,
  responsive: [
    {
      breakpoint: 1024,
      sliderSettings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      sliderSettings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      sliderSettings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const DetailPage = () => (
  <>
    <MainTitle>“다가올 WEB 3.0의 미래를 함께 만들어나갈 혁신가들의 공간”</MainTitle>
    <DetailContainer>
      <DetailItem># 블록체인밸리(Blockchain Valley)는 고려대학교를 기반으로 활동하는 블록체인 학회입니다.</DetailItem>
      <DetailItem>
        # WEB 3.0의 진정한 가치를 학습하는 공간이자, 블록체인을 통해 미래를 위한 준비를 하는 공간입니다.
      </DetailItem>
      <DetailItem>
        # 구성원(node)간의 수평적 문화를 지향하며, 고려대학교 구성원 외에도 <br />
        나이, 소속, 출신에 제한 없이 누구나 함께 할 수 있습니다.
      </DetailItem>
    </DetailContainer>
    <Subtitle>학회 라운지</Subtitle>
    <SliderContainer>
      <StyledSlider {...sliderSettings}>
        <ImgContainer>
          <LoungeImg src={lounge1} alt="학회 라운지 이미지" />
        </ImgContainer>
        <ImgContainer>
          <LoungeImg src={lounge2} alt="학회 라운지 이미지" />
        </ImgContainer>
        <ImgContainer>
          <LoungeImg src={lounge3} alt="학회 라운지 이미지" />
        </ImgContainer>
        <ImgContainer>
          <LoungeImg src={lounge4} alt="학회 라운지 이미지" />
        </ImgContainer>
        <ImgContainer>
          <LoungeImg src={lounge5} alt="학회 라운지 이미지" />
        </ImgContainer>
      </StyledSlider>
    </SliderContainer>
  </>
);

export default DetailPage;