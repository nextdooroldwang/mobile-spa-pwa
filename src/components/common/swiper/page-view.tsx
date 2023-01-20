import React from 'react';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.less';
interface SlideModel {
  key: string;
  node: React.ReactNode;
}

interface PageViewPropsModel {
  slides: SlideModel[];
}

export const PageView = (props: PageViewPropsModel) => {
  const { slides } = props;
  const slidesNode = slides.map((item) => (
    <SwiperSlide key={item.key}> {item.node}</SwiperSlide>
  ));
  return (
    <Swiper
      modules={[A11y]}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {slidesNode}
    </Swiper>
  );
};
