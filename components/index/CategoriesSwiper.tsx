import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import "swiper/css";

const CategoriesSwiper = (): any => {
  return (
    <>
      <div className="categories-swiper">
        <div className="row justify-content-center">
          <div className="col-md-10 col-12">
            {/* <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesSwiper;
