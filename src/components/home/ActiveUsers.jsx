import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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

const ActiveUsers = () => {
  return (
    <div className="container mx-auto">
      <Slider {...settings} arrows={false}>
        <div className="p-4">
          <div className="bg-gray-600 relative rounded-lg text-center">
            <div className="w-12 relative mx-auto -top-4 rounded-full">
              <img
                className="w-full rounded-full"
                src="http://chatvia-dark.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
              />
              <div className=" p-1 w-1 h-1 absolute right-1 border border-1 bottom-1 z-10 rounded-full bg-green-500"></div>
            </div>
            <div className="mb-2 p-1 -mt-3 text-xs font-semibold">
              Hello World
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-red-500 p-6 text-center">2</div>
        </div>
        <div className="p-4">
          <div className="bg-red-500 p-6 text-center">3</div>
        </div>
        <div className="p-4">
          <div className="bg-red-500 p-6 text-center">4</div>
        </div>
        <div className="p-4">
          <div className="bg-red-500 p-6 text-center">5</div>
        </div>
        <div className="p-4">
          <div className="bg-red-500 p-6 text-center">6</div>
        </div>
      </Slider>
    </div>
  );
};

export default ActiveUsers;
