import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Actors = () => {
  const images = [
    "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_.jpg",
    "https://flxt.tmsimg.com/assets/72163_v9_bb.jpg",
    "https://cdn.britannica.com/32/181632-004-51372707/Mark-Wahlberg-producer.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/25/Sheen%2C_Martin_%282008%29.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_FMjpg_UX1000_.jpg",
  ];

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

  return (
    <div className="mx-8 my-10 pl-12 text-center">
      <h1 className="my-8 text-2xl">Cast</h1>
      <Slider {...settings}>
        {images.map((imageURL) => (
          <div>
            <img src={imageURL} className="w-28 h-28 rounded-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Actors;
