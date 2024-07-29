import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import image2 from '../images/image2.png';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import 'swiper/css/pagination';
import { models } from "../../Export";

export const swiperImages = [
  '/i0.png',
  '/i1.png',
  '/i2.png',
];

const Offers = () => {
  return (
    <section className='models-section' style={{
      background: `url(${image2})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '1080px',
    }}>
      <h1>OUR MODELS</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={200}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {models.map((model, index) => (
          <SwiperSlide key={index}>
            <Link to={`/models/${index}`}>
              <img src={swiperImages[index % swiperImages.length]} alt="image" className={model ? '' : 'error'}/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Offers;
