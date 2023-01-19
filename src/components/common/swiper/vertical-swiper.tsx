import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const VerticalSwiper = () => {
  return (
    <Swiper
      modules={[A11y]}
      direction={'vertical'}
      slidesPerView={1}
      loop={true}
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
