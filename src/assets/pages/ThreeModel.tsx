import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const ThreeModel = ({model, givenStyle}: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(givenStyle ? (window.innerWidth / 2 - 20) : 400, givenStyle ? (window.innerHeight / 2 - 20) : 400)
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      model,
      (gltf) => {
        const gltfScene = gltf.scene;
        gltfScene.position.y = 1;
        gltfScene.rotation.y = 1
        gltfScene.scale.set(10, 10, 10);
        scene.add(gltfScene);
      },
      undefined,
      (error) => {
        console.error('An error happened while loading the model:', error);
      }
    );
    
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
    
    const handleResize = () => {
      renderer.setSize(givenStyle ? (window.innerWidth / 2 - 20) : 400, givenStyle ? (window.innerHeight / 2 - 20) : 400)
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, [model]);

  return <canvas ref={canvasRef} style={{width: '100%', height: '100vh'}} className="model"></canvas>;
};

export default ThreeModel;