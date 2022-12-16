import "./style.css";
import ReactDOM from "react-dom/client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [3, 2, 6],
};

root.render(
  <Canvas gl={{ antialias: true }} camera={cameraSettings}>
    <Experience />
  </Canvas>
);
