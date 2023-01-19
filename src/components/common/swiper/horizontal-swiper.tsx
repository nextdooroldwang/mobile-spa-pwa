import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HorizontalSwiper = () => {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
