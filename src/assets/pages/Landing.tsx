import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../css/landing.css'
import Introduction from './Introduction';
import Offers from './Offers';
import AllPanoramas from './AllPanoramas';

const Landing = () => {
  return (
    <main className='main-container'>
      <Introduction />
      <Offers />
      <AllPanoramas/>
    </main>
  )
}

export default Landing
