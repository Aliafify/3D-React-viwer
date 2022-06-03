import React from "react";

import {Canvas} from 'react-three-fiber'
import {OrbitControls,Stars} from '@react-three/drei'
 
import { Physics, usePlane, useSphere } from "@react-three/cannon"
function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}
function Box() {
  const [ref, api] = useSphere(() => ({ mass: 0, position: [0, 2, 0] }));
  return (
    <mesh
     
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="#333" />
    </mesh>
  );
}
export default function App() {
  return (
  
   <Canvas style={{height:'100vh'}}>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[1, 1, 1]} angle={0.4} />
      <Physics>
        <Box />
        <Plane/>
      </Physics>
    </Canvas>
    
  );
}


