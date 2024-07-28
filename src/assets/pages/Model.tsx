import React from 'react'
import NewModel from './NewModel'

const Model = () => {
  return (
    <div className="model-detail">
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
          <NewModel />
      </section>
    </div>
  )
}

export default Model
