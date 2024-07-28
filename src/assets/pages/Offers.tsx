import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import image from '../images/image1.png'
import image3 from '../images/image3.png'
import 'swiper/css/effect-coverflow';
import 'swiper/css';

const Offers = () => {
  const models = [
    '/scene.gltf',
    '/scene.gltf'
  ];
  
  models.map((element: any) => {
    console.log(element)
  })
  return (
    <section className='models-section' style={{background: `url(${image3})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '1080px'}}>
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
          <SwiperSlide key={id}>
            <Link to={`/models/${id}`}>
              {/* <section className='model-container'>
                <div className="model-text-container">
                  <div className="model-text-left model-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt dolor iste incidunt et consequatur maiores, provident nisi quasi consectetur aspernatur sequi! Consequatur, consectetur officiis. Inventore excepturi esse voluptate minus expedita?
                  </div>
                  <div className="model-text-mid model-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere architecto dolor libero, magnam dolorum asperiores voluptatibus, impedit, in maxime tenetur. Optio ipsum temporibus omnis consequatur culpa fuga officiis consequuntur.
                  </div>
                  <div className="model-text model-name">
                    Model Name
                  </div>
                </div>
              </section> */}
                <img src={image} alt="aaaaaaa" style={{maxHeight: "400px", width: '400px'}}/>
            </Link>
          </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Offers
