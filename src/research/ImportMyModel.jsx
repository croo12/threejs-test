import React, { Suspense } from "react";

// import PropTypes from "prop-types";

import { Model } from "../Models/Penguin";
import { Canvas } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const ImportMyModel = (props) => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <Model />
        <Environment preset="lobby" background />
      </Suspense>
    </Canvas>
  );
};

ImportMyModel.propTypes = {};

export default ImportMyModel;
