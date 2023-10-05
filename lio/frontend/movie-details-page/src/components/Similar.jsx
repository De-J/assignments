import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Similar = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const results = [
    "/uvb86wVCIqD3Rlbr0GTNgWDF7Zo.jpg",
    "/5A1kg62MmQS5Dm3oo6t1OLu2lCy.jpg",
    "/eGSfqknufcsXmM2Rb59H9SiNd4T.jpg",
    "/7oaie3ZBc9UuWZLF24crro1pone.jpg",
    "/tzGY49kseSE9QAKk47uuDGwnSCu.jpg",
    "/bOXk4mF2TjMJVq8DZYUtblKOR92.jpg",
    "/9OqDWRgUDtrkLZ57RwyMz8NzV81.jpg",
    "/csXyZ1BsDBlH0PXkOFWxggEf9WF.jpg",
  ];

  return (
    <div className="similar my-18 mx-8 pl-12 text-center">
      <h1 className="text-2xl my-8">Similar Movies</h1>
      <Slider {...settings}>
        {results.map((posterURL) => (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${posterURL}`}
              className="w-32 h-52"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Similar;
