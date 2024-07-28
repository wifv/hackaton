// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import image from '../images/image1.png'
import { Link } from 'react-router-dom';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Offers = () => {
  const models = [
    '/model/scene.gltf',
    '/model/scene.gltf'
  ];

  return (
    <section style={{background: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '1080px'}}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          models.map((model, id) => (
          <SwiperSlide>
            <Link to={`/models/${id}`}>
              <img src={image} alt="model" />
            </Link>
          </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Offers
