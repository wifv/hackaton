import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../css/landing.css'
import Introduction from './Introduction';
import Offers from './Offers';
import image from '../images/image1.png'
import NewModel from './NewModel';

const Landing = () => {
  
  const models = [
    '/scene.gltf',
    '/scene.gltf'
  ];
  return (
    <main className='main-container'>
      <Introduction />
      {/*
      <div className="models-container">
        <h1>OUR MODELS</h1>
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
          {models.map((model: any, index: any) => (
            <SwiperSlide key={index}>
              <section className='model-container'>
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
                <a href={`/models/${index}`}>
                  <img src={image} alt="aaaaaaa" style={{maxHeight: "400px", width: '400px'}}/>
                </a>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
        </div> */}
      <Offers />
    </main>
  )
}

export default Landing
