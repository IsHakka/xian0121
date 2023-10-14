import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../UI/Loader/Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    // React Three
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}></ambientLight>
      <directionalLight position={[0, 0, 0.5]}></directionalLight>
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 1]}></icosahedronGeometry>
        <meshStandardMaterial color='#fff' polygonOffset polygonOffsetFactor={-5} flatShading></meshStandardMaterial>
        <Decal position={[0,0,1]} rotation={[2* Math.PI,0,6.25]} map={decal}></Decal>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameLoop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}></Ball>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas