import styled from 'styled-components';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import MediumCard from './MediumCard';

function RecentMedium() {
  const Container = styled.div`
    overflow: hidden;
  `;
  const StyledSlider = styled(Slider)`
    .slick-slide div {
      outline: none;
    }
  `;
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <h2>최근 미디엄 글</h2>
      <StyledSlider {...settings}>
        <MediumCard />
      </StyledSlider>
    </Container>
  );
}

export default RecentMedium;
