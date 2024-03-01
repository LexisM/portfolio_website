/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress, Html, PerspectiveCamera } from "@react-three/drei";
import { Suspense, } from "react";

import { ModelTransformed } from "/src/components/Room2_gltf-transformed";

function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <div className="h-full text-brand dark:text-brand-200 font-dmSans font-bold text-3xl">
      {progress} % loaded</div>
  </Html>
}

function Model() {


  return (


    <Canvas className=" backdrop-blur-lg bg-brand-dark/85 dark:bg-brand-400/30 rounded-lg"
      shadows dpr={[1, 2]}
      camera={{ fov: 100, near: 0.1, far: 50, position: [8, 20, 9] }
      } frameloop="demand" >

      <ambientLight intensity={.9} />
      <directionalLight color={"#FBC088"} intensity={0.8} position={[5, 4, 4]} />
      <directionalLight color={"#96BEF2"} intensity={5} position={[0, 1, 0]} />



      <Suspense fallback={<Loader />}>

        <ModelTransformed />

        <OrbitControls
          enablePan={false}
          minAzimuthAngle={-Math.PI / 4.8}
          maxAzimuthAngle={Math.PI / 1.4}
          minDistance={0.1} // Lock zoom out
          maxDistance={9} //lock zoom in
          minPolarAngle={Math.PI / 50} // Limit panning downwards
          maxPolarAngle={(3 * Math.PI) / 6.2} // Limit panning upwards

        />

        <PerspectiveCamera

          position={[
            10,
            200,
            100
          ]}
        />



      </Suspense>
    </Canvas >

  );
}

export default Model;