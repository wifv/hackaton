import { useLocation } from 'react-router-dom';
import NewModel from './NewModel'

const info = [
  {
    name: 'Mahsi (high boots) – gold embroidered.',
    information: 'It probably belonged to the Emir of Bukhara. End of XIX century.',
    secondary: 'Currently available for viewing at the exhibition of the Samarkand State Integrated Historical-Architectural and Art Museum-Reserve.'
  },
  {
    name: 'Kaushi (boots) – gold embroidered.',
    information: 'It probably belonged to the Emir of Bukhara. Year 1895.',
    secondary: 'Currently available for viewing at the exhibition of the Samarkand State Integrated Historical-Architectural and Art Museum-Reserve.'
  },
  {
    name: 'Mahsi (high boots) – gold embroidered.',
    information: 'It probably belonged to the Emir of Bukhara. End of XIX century.',
    secondary: 'Currently available for viewing at the exhibition of the Samarkand State Integrated Historical-Architectural and Art Museum-Reserve.'
  }
]

const Model = () => {
  const location = useLocation()
  let u: any = location.pathname.slice(-1)
  console.log(u)
  return (
    <div className="model-detail">
      <section className='model-container'>
        <div className="model-text-container">
          <div className="model-text-left model-text">
            {info[u].secondary}
          </div>
          <div className="model-text-mid model-text">
            {info[u].information}
          </div>
          <div className="model-text model-name">
            {info[u].name}
          </div>
        </div>
          <NewModel />
      </section>
    </div>
  )
}

export default Model;
