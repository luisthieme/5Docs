"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";

export default function CubeCanvas() {
  return (
    <div className="h-[350px] w-[400px] hidden sm:block">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <directionalLight position={[-1, -1, -1]} intensity={2} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * -0.3;
    mesh.current.rotation.y += delta * 0.4;
    mesh.current.rotation.z += delta * 0.3;
  });

  const texture_1 = useLoader(
    TextureLoader,
    "/images/5Minds_ProcessCube_Authority_2.png"
  );
  const texture_2 = useLoader(
    TextureLoader,
    "/images/5Minds_ProcessCube_Cli_3.png"
  );
  const texture_3 = useLoader(
    TextureLoader,
    "/images/5Minds_ProcessCube_Engine_2.png"
  );
  const texture_4 = useLoader(
    TextureLoader,
    "/images/5Minds_ProcessCube_Portal_2.png"
  );
  const texture_5 = useLoader(
    TextureLoader,
    "/images/5Minds_ProcessCube_Studio_2.png"
  );
  const texture_6 = useLoader(
    TextureLoader,
    "/images/5Minds_ProcessCube_Studio_2.png"
  );
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}
