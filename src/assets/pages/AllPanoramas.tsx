import { paths } from '../../Export'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const panoramaPaths = [
  '/mausoleum.webp',
  '/registan.webp'
]

const AllPanoramas = () => {
  return (
    <div className='panorama-container'>
      <h1>OUR PANORAMAS</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={300}
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
        {
          paths.map((path, id) => (
            <SwiperSlide className='panorama-slide'>
              <Link to={`/panoramas/${id}`}>
                <img src={panoramaPaths[id % panoramaPaths.length]} alt="image" className={`panorama-image ${path ? '' : 'error'}}`}/>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default AllPanoramas
