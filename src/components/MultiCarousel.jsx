import PropTypes from "prop-types";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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

const MultiCarousel = ({ data, Component }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={data}>
        {(loadedData) => (
          <Slider {...settings} arrows={false}>
            {loadedData.map((item, index) => (
              <div key={index}>
                <Component item={item} />
              </div>
            ))}
          </Slider>
        )}
      </Await>
    </Suspense>
  );
};

export default MultiCarousel;

MultiCarousel.propTypes = {
  data: PropTypes.object.isRequired,
  Component: PropTypes.func.isRequired,
};
