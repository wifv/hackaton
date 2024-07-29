import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useLoader } from '@react-three/fiber'
import { useState, useEffect } from "react"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLocation } from 'react-router-dom';
import { models } from "../../Export"

const NewModel = () => {
  const [modelPath, setModelPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const modelIndex = Number(location.pathname.split('/').pop()) || 0;
    setModelPath(models[modelIndex]);
  }, [location]);

  const gltf: any = modelPath ? useLoader(GLTFLoader, modelPath) : null;

  if (!modelPath || !gltf) {
    return;
  }

  return (
    <div className="newModel">
      <Canvas className="newCanvas">
        <ambientLight intensity={1} />
        <primitive object={gltf.scene} scale={[2, 2, 2]} rotation={[0.4, 0.7, 0]}/>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default NewModel;
