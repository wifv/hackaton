import image1 from '../images/image1.png'
import '../css/introduction.css'
import ThreeModel from './ThreeModel'

const Introduction = () => {
  const model = [
    '/model/scene.gltf'
  ]
  return (
    <div className='introduction' style={{background: `url(${image1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '1080px'}}>
      <div className="introduction-content">
        <div className="introduction-content-left">
          <h1 className='introduction-header'>See the history of Uzbekistan with your own eyes</h1>
        </div>
        <div className="introduction-content-right">
          <ThreeModel model={model[0]} givenStyle={false}/>
        </div>
      </div>
    </div>
  )
}

export default Introduction
