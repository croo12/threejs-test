// import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

// import PropTypes from "prop-types";

const Cube = (props) => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta;
  });

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial color={"pink"} />
    </mesh>
  );
};

const ThreejsContainer = (props) => {
  return (
    <Canvas>
      <Cube position={[0, 0, 0]} />
      {/* <Cube position={[0, 0, 3]} /> */}
      <Cube position={[0, 3, 0]} />
      <Cube position={[3, 0, 0]} />
    </Canvas>
  );
};

ThreejsContainer.propTypes = {};

export default ThreejsContainer;
