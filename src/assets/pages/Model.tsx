import ThreeModel from './ThreeModel'

const Model = () => {
  const models = [
    '/model/scene.gtlf',
    '/model/scene.gtlf',
    // '/modelone/scene.gtlf'
  ];
  console.log(window.location)
  console.log(models[Number(window.location.href.slice(-1, 0))])
  return (
    <div>
      <ThreeModel model={`${models[Number(window.location.href.slice(-1, 0))]}`} givenStyle={false}/>
    </div>
  )
}

export default Model
