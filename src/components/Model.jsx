/* eslint-disable react/no-unknown-property */

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";


const Scene = () => {

  const gltf = useLoader(GLTFLoader, "src/assets/room2.gltf");
  return <primitive object={gltf.scene} scale={1.0} />;


};


function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <div className="h-full text-brand dark:text-brand-200 font-dmSans font-bold text-3xl">
      {progress} % loaded</div>
  </Html>
}

function Model() {



  return (


    <Canvas
      shadows dpr={[1, 2]}
      camera={{ fov: 100, near: 0.1, far: 50, position: [8, 20, 9] }}>

      <ambientLight intensity={2} />
      <directionalLight color={"#96BEF2"} intensity={0.9} position={[5, 4, 4]} />

      <Suspense fallback={<Loader />}>

        <Scene />
        <OrbitControls
          enablePan={false}
          minAzimuthAngle={-Math.PI / 4.1} // Lock rotation to half the way horizontally
          maxAzimuthAngle={Math.PI / 1.6} // Lock rotation to half the way horizontally
          minDistance={0.1} // Lock zoom out
          maxDistance={9} //lock zoom in
          minPolarAngle={Math.PI / 50} // Limit panning downwards
          maxPolarAngle={(3 * Math.PI) / 7} // Limit panning upwards

        />


      </Suspense>
    </Canvas>

  );
}

export default Model;