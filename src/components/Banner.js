// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
function Banner(props) {
  const navigate = useNavigate();
  const banner = [
    { bannerName: "/banners/JeansPantsBanner.jpg", navTo: '/products/Jeans Pants' },
    { bannerName: "/banners/PerfumeBanner.jpg", navTo: `/products/Fragrances` },
    { bannerName: "/banners/ShirtBanner.jpg", navTo: `/products/Shirts` },
    { bannerName: "/banners/ShoeBanner.jpg", navTo: `/products/Footwear` },
    { bannerName: "/banners/T-shirtBanner.jpg", navTo: `/products/T-shirts` },
  ];
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {banner.map((el, i) => {
        return (
          <SwiperSlide key={i} className="">
            <img
              src={el.bannerName}
              onClick={() => navigate(el.navTo)}
              alt={`img`}
              style={{
                height: "100%",
                objectFit: "cover",
                width: "100%",
                objectPosition: "center 10%",
                maxHeight: "450px",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default Banner;
